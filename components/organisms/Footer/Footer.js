import PropTypes from "prop-types";
import FooterLogo from "components/atoms/FooterLogo";

/**
 * Render the Footer component.
 *
 * @author                           WebDevStudios
 * @param  {object}  props           The component attributes as props.
 * @param  {object}  props.social    Yoast SEO social media data.
 * @param  {object}  props.menu      Arrary of menu items.
 * @param  {string}  props.siteTitle Yoast SEO site title.
 * @return {Element}                 The Footer component.
 */
export default function Footer() {
  return (
    <footer className="bg-black w-full flex lg:flex-row flex-col justify-between px-8 py-2 items-center z-10">
      <div className="text-white text-center text-xs lg:order-1 order-2 py-2">
        &copy; 2024 Alien Wear
      </div>
      <FooterLogo className="w-32 order-1 lg:order-2" />
      <div className="text-white text-xs order-3 py-2">
        &nbsp;All Rights Reserved.
      </div>
    </footer>
  );
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
};
