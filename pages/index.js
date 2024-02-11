import Blocks from "components/molecules/Blocks";
import Layout from "components/common/Layout";
import { getPageStaticProps } from "functions/wordpress/blocks/getPageStaticProps";
import Products from "components/organisms/Products";

const postType = "page";

export default function Home(props) {
  console.log("HOME: ", props);
  return (
    <>
      <Layout
        postType={postType}
        postId={props?.databaseId}
        seo={{ ...props?.seo }}
      >
        <Blocks blocks={props?.blocks} />
        <Products />
      </Layout>
    </>
  );
}

export const getStaticProps = getPageStaticProps;
