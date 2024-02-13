import Layout from "components/common/Layout";
import CheckoutForm from "components/organisms/checkout/CheckoutForm";
import GET_COUNTRIES from "functions/wordpress/queries/get-countries";
import apolloClient from "lib/wordpress/connector";

const Checkout = ({ data, props }) => (
  <Layout postId={props?.databaseId} seo={{ ...props?.seo }}>
    <div className="checkout container mx-auto my-32">
      <h1 className="mb-5 text-2xl uppercase">Checkout Page</h1>
      <CheckoutForm countriesData={data?.wooCountries ?? {}} />
    </div>
  </Layout>
);

export default Checkout;

export async function getStaticProps() {

  const { data } = await apolloClient.query({
    query: GET_COUNTRIES,
  });

  return {
    props: {
      data: data || {},
    },
    revalidate: 1,
  };
}
