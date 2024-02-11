import { getPageStaticProps } from "functions/wordpress/blocks/getPageStaticProps";

export default function Custom500() {
  return <h1>500 - Server-side error occurred</h1>;
}

export const getStaticProps = getPageStaticProps;
