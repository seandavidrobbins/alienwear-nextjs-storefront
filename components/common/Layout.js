import Footer from "components/organisms/Footer";
import PropTypes from "prop-types";
import Meta from "components/common/Meta";
import Header from "components/organisms/Header";
import { useWordPressContext } from "components/common/WordPressProvider";
import { NavMobile } from "components/organisms/MobileMenu/MobileMenu";

/**
 * Render the Layout component.
 *
 * @author WebDevStudios
 * @param  {object}  props          The component attributes as props.
 * @param  {any}     props.children Child component(s) to render.
 * @param  {object}  props.seo      Yoast SEO data from WordPress.
 * @return {Element}                The Layout component.
 */
export default function Layout({ children, seo }) {
  const { mainMenuItems } = useWordPressContext();

  return (
    <>
      <Meta seo={seo} />
      <Header items={mainMenuItems} />
      <NavMobile items={mainMenuItems} />
      <main id="page-content" className="bg-black mb-[1px] flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
