import Contact from "components/organisms/Contact";
import PropTypes from "prop-types";

/**
 * Custom Contact Block
 *
 * The Custom Contact block from ACF.
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
export default function BlockCustomContact({ data }) {
  const { heading, phone, email, location, image } = data;

  return (
    <Contact
      heading={heading}
      phone={phone}
      email={email}
      location={location}
      image={image}
    />
  );
}

BlockCustomContact.propTypes = {
  heading: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
};
