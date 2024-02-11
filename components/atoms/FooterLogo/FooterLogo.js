import PropTypes from "prop-types";
import React from "react";
import Image from "next/image";
import Link from "next/link";
/**
 * Render the Logo component.
 *
 * @author WebDevStudios
 * @param  {object}  props           Logo props.
 * @param  {string}  props.className Optional classname for the element.
 * @param  {Array}   props.type      Type or style of the logo.
 * @return {Element}                 The Logo component.
 */
export default function FooterLogo() {
  return (
    <Link href="/" aria-label="Back to home" className="block">
      <Image
        alt="Site Title"
        className="flex"
        src="/images/logo-white.png"
        height="200"
        width="200"
      />
    </Link>
  );
}

FooterLogo.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["light", "dark"]).isRequired,
};

FooterLogo.defaultProps = {
  type: "dark",
};
