import styles from "components/atoms/RichText/RichText.module.css";
import Blocks from "components/molecules/Blocks";
import getBlockStyles from "functions/wordpress/blocks/getBlockStyles";
import cn from "classnames";
import PropTypes from "prop-types";
import React from "react";

/**
 * List Block
 *
 * The core List block from Gutenberg.
 *
 * @author WebDevStudios
 * @param  {object}  props                    The component props.
 * @param  {string}  props.anchor             Optional anchor/id.
 * @param  {string}  props.backgroundColorHex The background color hex value.
 * @param  {string}  props.backgroundColor    The background color name.
 * @param  {string}  props.className          Optional className.
 * @param  {string}  props.fontSize           The font size name.
 * @param  {boolean} props.ordered            Is this an ordered list.
 * @param  {boolean} props.reversed           Is this a reversed list.
 * @param  {number}  props.start              The start number.
 * @param  {object}  props.style              The style attributes.
 * @param  {string}  props.textColor          Optional text color style.
 * @param  {string}  props.textColorHex       The text color hex value.
 * @param  {string}  props.innerBlocks        The array of inner blocks to display.    The content of the block.
 * @return {Element}                          The RichText component.
 */
export default function BlockList({
  anchor,
  backgroundColorHex,
  backgroundColor,
  className,
  fontSize,
  ordered,
  reversed,
  start,
  style,
  textColor,
  textColorHex,
  innerBlocks,
}) {
  const tag = ordered ? "ol" : "ul";

  const listClass = cn(
    className,
    fontSize && `text-${fontSize}`,
    styles.richtext
  );

  const listStyle = getBlockStyles({
    backgroundColor,
    backgroundColorHex,
    style,
    textColor,
    textColorHex,
  });

  return React.createElement(
    tag,
    {
      className: listClass,
      id: anchor,
      reversed: reversed,
      start: start,
      style: listStyle,
    },
    <>{!!innerBlocks?.length && <Blocks blocks={innerBlocks} />}</>
  );
}

BlockList.propTypes = {
  anchor: PropTypes.string,
  backgroundColorHex: PropTypes.string,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  fontSize: PropTypes.string,
  ordered: PropTypes.bool,
  reversed: PropTypes.bool,
  start: PropTypes.number,
  style: PropTypes.object,
  textColor: PropTypes.string,
  textColorHex: PropTypes.string,
  innerBlocks: PropTypes.array,
};
