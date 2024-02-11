import cn from "classnames";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Code.module.css";

/**
 * Render the Code component.
 *
 * @author WebDevStudios
 * @param  {object}  props           The component attributes as props.
 * @param  {string}  props.className Optional classname.
 * @param  {string}  props.id        The optional ID.
 * @param  {string}  props.content   The content for inside the code block.
 * @param  {object}  props.style     The inline styles.
 * @return {Element}                 The Code component.
 */
export default function Code({ id, className, content, style }) {
  const classNames = className?.length ? className.split(" ") : [];

  // Use the first entry in className to pass the langauge.
  const language = classNames?.length ? classNames.shift() : "javascript";

  /**
   * Replace any `&lt;` and `&gt; encoded HTML.
   *
   * @param  {string} content The content string.
   * @return {string}         The formatted content string.
   */
  function codeFormatter(content) {
    if (!content) {
      return null;
    }

    let code = content.replace(/&lt;/g, "<");
    return code.replace(/&gt;/g, ">");
  }

  const prismProps = {
    customStyle: style,
    language: language,
  };

  // Add color to code tag props if custom color provided.
  if (style?.color) {
    prismProps.codeTagProps = {
      style: {
        color: "inherit",
      },
    };
  }

  return (
    <>
      {!!content && (
        <div
          id={id ? id : null}
          className={cn(styles.code, classNames.join(" "))}
          style={style}
        >
          {content}
        </div>
      )}
    </>
  );
}

Code.propTypes = {
  id: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape({
    background: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.string,
  }),
};
