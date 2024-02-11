import RichText from "components/atoms/RichText";
import Blocks from "components/molecules/Blocks";
import PropTypes from "prop-types";

/**
 * List Item Block
 *
 * The core List Item block from Gutenberg.
 *
 * @author WebDevStudios
 * @param  {object}  props             The component props.
 * @param  {string}  props.content     The content of the block.
 * @param  {string}  props.className   Optional className.
 * @param  {string}  props.innerBlocks The array of inner blocks to display.
 * @return {Element}                   The List Item component.
 */
export default function BlockListItem({ content, className, innerBlocks }) {
  return (
    <li className={className}>
      <RichText tag="span">{content}</RichText>
      {!!innerBlocks?.length && <Blocks blocks={innerBlocks} />}
    </li>
  );
}

BlockListItem.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
  innerBlocks: PropTypes.array,
};
