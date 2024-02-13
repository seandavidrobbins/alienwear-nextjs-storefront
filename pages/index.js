import Layout from "components/common/Layout";
import Product from "components/organisms/Products/Product";
import ParentCategoriesBlock from "components/organisms/category/category-block/ParentCategoriesBlock";
import PRODUCTS_AND_CATEGORIES_QUERY from "functions/wordpress/queries/product-and-categories";
import HeroCarousel from "components/organisms/HeroCarousel/HeroCarousel";
import apolloClient from "lib/wordpress/connector";
import GET_MENUS_QUERY from "functions/wordpress/queries/get-menus";
import { mapMainMenuItems } from "functions/wordpress/blocks/mapMainMenuItems";

const postType = "page";

export default function Home(props) {
  console.log("HOME: ", props);

  const { products, productCategories, heroCarousel } = props || {};

  return (
    <Layout
      postType={postType}
      postId={props?.databaseId}
      seo={{ ...props?.seo }}
    >
      {/*Hero Carousel*/}
      <HeroCarousel heroCarousel={heroCarousel} />
      {/*Categories*/}
      <main className="mx-[5%]">
        <div className="product-categories-container">
          <h2 className="main-title text-xl mb-5 uppercase mt-32">
            <span className="main-title-inner text-white">Categories</span>
          </h2>
          <ParentCategoriesBlock productCategories={productCategories} />
        </div>
        {/*Products*/}
        <div className="products container mx-auto my-32 px-4 xl:px-0">
          <h2 className="products-main-title main-title mb-5 text-xl uppercase">
            <span className="main-title-inner text-white">Products</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.length
              ? products.map((product) => (
                  <Product key={product.id} product={product} />
                ))
              : ""}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data: productData } = await apolloClient.query({
    query: PRODUCTS_AND_CATEGORIES_QUERY,
  });

  const { data: menuData } = await apolloClient.query({
    query: GET_MENUS_QUERY,
  });

  return {
    props: {
      productCategories: productData?.productCategories?.nodes
        ? productData.productCategories.nodes
        : [],
      products: productData?.products?.nodes ? productData.products.nodes : [],
      heroCarousel: productData?.heroCarousel?.nodes[0]?.children?.nodes
        ? productData.heroCarousel.nodes[0].children.nodes
        : [],
      mainMenuItems: mapMainMenuItems(
        menuData.acfOptionsMainMenu.mainMenu.menuItems
      ),
    },
    revalidate: 1,
  };
}
