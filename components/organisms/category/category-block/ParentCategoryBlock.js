import Link from "next/link";
import Image from "components/atoms/ProductImage";
import { DEFAULT_CATEGORY_IMG_URL } from "functions/wordpress/constants/urls";

const ParentCategoryBlock = (props) => {
  const { category } = props;

  return (
    <div className="product mb-5">
      <Link href={`/category/${category?.slug}`}>
        <Image
          className="object-cover h-40 md:h-64"
          layout="fill"
          containerClassNames="w-96 h-56"
          sourceUrl={category?.image?.sourceUrl ?? ""}
          defaultImgUrl={DEFAULT_CATEGORY_IMG_URL}
          alt={category?.image?.altText ?? category.slug}
        />
        <div className="product-title-container p-3">
          <h3 className="product-title text-lg font-medium text-white">
            {category?.name}
          </h3>
          <span className="shop-now text-sm">+ Explore</span>
        </div>
      </Link>
    </div>
  );
};

export default ParentCategoryBlock;
