import Container from "components/atoms/Container";
import Layout from "components/common/Layout";
import { getPageStaticProps } from "functions/wordpress/blocks/getPageStaticProps";

// Define route post type.
const postType = "page";

/**
 * Render the Custom404 component.
 *
 * @author WebDevStudios
 * @param  {object}  props      The component attributes as props.
 * @return {Element}            The Custom404 component.
 */
export default function Custom404(props) {
  return (
    <Layout
      postType={postType}
      postId={props?.databaseId}
      seo={{ ...props?.seo }}
    >
      <Container>
        <article className="h-[80vh]">
          <div className="h-full flex flex-col items-center justify-center">
            <h1 className="ml-8 text-3xl text-black">404 Not Found</h1>
            <h3>That page could not be found!</h3>
          </div>
        </article>
      </Container>
    </Layout>
  );
}

export const getStaticProps = getPageStaticProps;
