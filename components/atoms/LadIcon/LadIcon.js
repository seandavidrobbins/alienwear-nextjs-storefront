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
export default function LadIcon() {
  return (
    <Link href="/" aria-label="Back to home" className="block">
      <Image
        alt="Site Title"
        className="flex h-[35px] w-auto lg:h-[50px]"
        src="/images/lonely_astronaut_logo.svg"
        height="100"
        width="100"
        priority
      />
    </Link>
  );
}

LadIcon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["light", "dark"]).isRequired,
};

LadIcon.defaultProps = {
  type: "dark",
};
