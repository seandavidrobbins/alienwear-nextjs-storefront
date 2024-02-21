import Layout from "components/common/Layout";
import { useRouter } from "next/router";
import AddToCartButton from "components/organisms/Cart/AddToCartButton";
import {
  PRODUCT_BY_SLUG_QUERY,
  PRODUCT_SLUGS,
} from "functions/wordpress/queries/product-by-slug";
import { isEmpty } from "lodash";
import GalleryCarousel from "components/organisms/single-product/gallery-carousel";
import Price from "components/organisms/single-product/price";
import { initializeWpApollo } from "lib/wordpress/connector";

export default function Product(props) {
  const { product } = props;

  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout postId={props?.databaseId} seo={{ ...props?.seo }}>
      {product ? (
        <div className="single-product container mx-auto my-32 px-4 xl:px-0">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="product-images">
              {!isEmpty(product?.galleryImages?.nodes) ? (
                <GalleryCarousel gallery={product?.galleryImages?.nodes} />
              ) : !isEmpty(product.image) ? (
                <img
                  src={product?.image?.sourceUrl}
                  alt="Product Image"
                  width="100%"
                  height="auto"
                  srcSet={product?.image?.srcSet}
                />
              ) : null}
            </div>
            <div className="product-info">
              <h4 className="products-main-title text-2xl uppercase text-white">
                {product.name}
              </h4>
              <div
                dangerouslySetInnerHTML={{
                  __html: product.description,
                }}
                className="product-description mb-5 text-white"
              />
              <Price
                salesPrice={product?.price}
                regularPrice={product?.regularPrice}
              />
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Layout>
  );
}

export async function getStaticProps(context) {
  const apolloClient = initializeWpApollo();

  const {
    params: { slug },
  } = context;

  const { data } = await apolloClient.query({
    query: PRODUCT_BY_SLUG_QUERY,
    variables: { slug },
  });

  return {
    props: {
      product: data?.product || {},
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const apolloClient = initializeWpApollo();

  const { data } = await apolloClient.query({
    query: PRODUCT_SLUGS,
  });

  const pathsData = [];

  data?.products?.nodes &&
    data?.products?.nodes.map((product) => {
      if (!isEmpty(product?.slug)) {
        pathsData.push({ params: { slug: product?.slug } });
      }
    });

  return {
    paths: pathsData,
    fallback: true,
  };
}
