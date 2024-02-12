import Layout from "components/common/Layout";
import CartItemsContainer from "components/organisms/Cart/cart-page/CartItemsContainer";

const postType = "page";

const Cart = (props) => {
  return (
    <Layout
      postType={postType}
      postId={props?.databaseId}
      seo={{ ...props?.seo }}
    >
      <CartItemsContainer />
    </Layout>
  );
};

export default Cart;
