import { getPageStaticProps } from "functions/wordpress/blocks/getPageStaticProps";

const Products = () => {
  return (
    <div className="flex flex-wrap overflow-hidden mt-[200px] text-seafoam mx-8">
      <div className="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3 xl:w-1/4 border border-seafoam text-seafoam">
        Column 1
      </div>
      <div className="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3 xl:w-1/4 border border-seafoam">
        Column 2
      </div>
      <div className="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3 xl:w-1/4 border border-seafoam">
        Column 2
      </div>
      <div className="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3 xl:w-1/4 border border-seafoam">
        Column 2
      </div>
    </div>
  );
};

export const getStaticProps = getPageStaticProps;

export default Products;
