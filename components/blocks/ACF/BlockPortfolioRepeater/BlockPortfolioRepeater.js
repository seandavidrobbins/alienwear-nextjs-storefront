import PortfolioRepeater from "components/molecules/PortfolioRepeater";
import PropTypes from "prop-types";

/**
 * GalleryRepeater Block
 *
 * The GalleryRepeater block from ACF.
 *
 * @author LADesigns
 * @param  {object}  props       The component props.
 * @param  {Array}   props.items The block items.
 * @return {Element}             The GalleryRepeater component.
 */
export default function BlockPortfolioRepeater(attributes) {
  return <PortfolioRepeater items={attributes} />;
}

BlockPortfolioRepeater.propTypes = {
  items: PropTypes.array,
};
