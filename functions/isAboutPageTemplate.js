import { useWordPressContext } from "components/common/WordPressProvider";
/**
 * Check if template set to About Page.
 *
 * @author Lonely Astronaut Designs
 * @param  {object}  post Post data.
 * @return {boolean}      Returns True/false depending on template name.
 */
export default function isAboutPageTemplate() {
  const { template } = useWordPressContext();
  if (template === "About Page") {
    return true;
  }
  return false;
}
