import apolloClient from "lib/wordpress/connector";
import { gql } from "@apollo/client";
import Blocks from "components/molecules/Blocks";
import Layout from "components/common/Layout";
import { getPageStaticProps } from "functions/wordpress/blocks/getPageStaticProps";

const postType = "page";

export default function Page(props) {
  return (
    <Layout
      postType={postType}
      postId={props?.databaseId}
      seo={{ ...props?.seo }}
    >
      <Blocks blocks={props?.blocks} />
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
      }
    `,
  });

  return {
    paths: data.pages.nodes
      .filter((page) => page.uri !== "/")
      .map((page) => ({
        params: {
          slug: page.uri.substring(1, page.uri.length - 1).split("/"),
        },
      })),
    fallback: false,
  };
};

export const getStaticProps = getPageStaticProps;
