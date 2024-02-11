import CustomMedia from "components/organisms/CustomMedia";
import PropTypes from "prop-types";

/**
 * Custom Media Block
 *
 * The Custom Media block from ACF.
 *
 * @author LADesigns
 * @param  {object}  props            Background component props.
 * @param  {string}  props.image      The background image.
 * @param  {string}  props.video      The background video.
 * @param  {string}  props.heading    The heading.
 * @param  {string}  props.subheading The subheading.
 * @param  {string}  props.content    The content.
 * @return {Element}                  The CustomMedia component.
 */
export default function BlockCustomMedia({ data }) {
  const { heading, subheading, content, video, image } = data;

  return (
    <CustomMedia
      heading={heading}
      subheading={subheading}
      content={content}
      video={video}
      image={image}
    />
  );
}

BlockCustomMedia.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
  subheading: PropTypes.string,
  video: PropTypes.string,
  image: PropTypes.string,
};
