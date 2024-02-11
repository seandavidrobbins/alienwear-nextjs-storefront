import HeroVideo from "components/organisms/HeroVideo";
import PropTypes from "prop-types";

/**
 * Hero Video Block
 *
 * The Hero Video block from ACF.
 *
 * @author Twenty Twenty
 * @param  {object}  props            Background component props.
 * @param  {string}  props.image      The background image.
 * @param  {string}  props.video      The background video.
 * @param  {string}  props.heading    The heading.
 * @param  {string}  props.subheading The subheading.
 * @param  {string}  props.content    The content.
 * @return {Element}                  The HeroVideo component.
 */
export default function BlockHeroVideo({ data }) {
  const { heading, subheading, content, video, image } = data;

  return (
    <HeroVideo
      heading={heading}
      subheading={subheading}
      content={content}
      video={video}
      image={image}
    />
  );
}

BlockHeroVideo.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
  subheading: PropTypes.string,
  video: PropTypes.string,
  image: PropTypes.string,
};
