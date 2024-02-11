import About from "components/organisms/About";
import PropTypes from "prop-types";

/**
 * Custom About Block
 *
 * The Custom About block from ACF.
 *
 * @author LADesigns
 * @param  {object}  props            Background component props.
 * @param  {string}  props.image      The contact image.
 * @param  {string}  props.phone      The contact phone.
 * @param  {string}  props.heading    The contact heading.
 * @param  {string}  props.email      The contact email.
 * @param  {string}  props.location   The contact location.
 * @return {Element}                  The Contact component.
 */
export default function BlockCustomAbout({ data }) {
  const { heading, skills, subheading, content, image } = data;

  return (
    <About
      heading={heading}
      skills={skills}
      subheading={subheading}
      content={content}
      image={image}
    />
  );
}

BlockCustomAbout.propTypes = {
  heading: PropTypes.string,
  skills: PropTypes.string,
  subheading: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
};
