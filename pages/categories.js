import ParentCategoriesBlock from "components/organisms/category/category-block/ParentCategoriesBlock";
import GET_CATEGORIES_QUERY from "functions/wordpress/queries/get-categories";
import apolloClient from "lib/wordpress/connector";

export default function Categories(props) {
  const { productCategories } = props;

  return (
    <>
      {/*Categories*/}
      <div className="categories product-categories-container container mx-auto my-32">
        <h2 className="text-2xl mb-5 uppercase pl-8 text-white">Categories</h2>
        <ParentCategoriesBlock productCategories={productCategories} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await apolloClient.query({
    query: GET_CATEGORIES_QUERY,
  });

  return {
    props: {
      productCategories: data?.productCategories?.nodes || [],
    },
    revalidate: 1,
  };
}
