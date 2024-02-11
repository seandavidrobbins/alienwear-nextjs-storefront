import PropTypes from "prop-types";
import Link from "next/link";
import Image from "components/atoms/Image";
/**
 * Render the Portfolio Repeater component.
 *
 * @param  {object}  props       PortfolioRepeater component props.
 * @param  {Array}   props.items The array of portfolio items.
 * @return {Element}             The PortfolioRepeater component.
 */
export default function PortfolioRepeater({ items }) {
  if (!items.data) return null;

  const newData = items.data;

  const repeatedData = [];

  for (let i = 0; i < newData.repeater_item; i++) {
    const titleKey = `repeater_item_${i}_lad_title`;
    const urlKey = `repeater_item_${i}_lad_url`;
    const imageKey = `repeater_item_${i}_lad_image`;

    if (
      newData[titleKey] !== undefined &&
      newData[urlKey] !== undefined &&
      newData[imageKey] !== undefined
    ) {
      repeatedData.push({
        title: newData[titleKey],
        url: newData[urlKey],
        image: newData[imageKey],
      });
    }
  }

  return (
    <div className="grid justify-center bg-seafoam px-4 lg:px-8 last:pb-[6.25rem]">
      <div
        className={
          "row-auto grid grid-cols-1 gap-y-8 md:grid-cols-2 2xl:grid-cols-3 items-center gap-4 p-0 h-full"
        }
      >
        {repeatedData?.map((item, index) => {
          const title = item?.title && item?.title;
          const url = item?.url && item?.url;
          const image = item?.image && item?.image;

          return (
            <div key={index}>
              <Link href={url}>
                <Image
                  url={image.url}
                  alt="Image"
                  priority
                  nextImageFill
                  className="relative h-full w-full"
                />
                <span className="lg:text-42 relative font-rajdhani text-30 font-semibold text-black">
                  {title}
                </span>
                <div className="border-b-2 border-ladgreen w-[2rem]" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

PortfolioRepeater.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
