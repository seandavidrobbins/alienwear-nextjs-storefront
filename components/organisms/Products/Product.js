import Link from "next/link";
import AddToCartButton from "components/organisms/Cart/AddToCartButton";
import Price from "components/organisms/single-product/price";
import Image from "components/atoms/ProductImage";
import { DEFAULT_PRODUCT_HOME_IMG_URL } from "functions/wordpress/constants/urls";
import parse from "html-react-parser";

const Product = (props) => {
  const { product } = props;

  return (
    // @TODO Need to handle Group products differently.
    undefined !== product && "GroupProduct" !== product.__typename ? (
      <div className="product mb-5">
        <Link href={`/product/${product?.slug}`}>
          <Image
            className="object-cover bg-gray-100"
            width="308"
            height="308"
            loading="lazy"
            sourceUrl={product?.image?.sourceUrl ?? ""}
            defaultImgUrl={DEFAULT_PRODUCT_HOME_IMG_URL}
            alt="Product Image"
          />
        </Link>
        <div className="product-info">
          <h3 className="product-title mt-3 font-medium text-seafoam">
            {product.name ? product.name : ""}
          </h3>
          <div className="product-description text-sm text-white pr-12">
            {parse(product?.description)}
          </div>
          <Price
            salesPrice={product?.price}
            regularPrice={product?.regularPrice}
          />
          <AddToCartButton product={product} />
        </div>
      </div>
    ) : (
      ""
    )
  );
};

export default Product;
