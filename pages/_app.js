import ExitPreview from "components/atoms/ExitPreview";
import WordPressProvider from "components/common/WordPressProvider";
import "styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import PropTypes from "prop-types";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import Custom500 from "./500";
import WhatsAppChatbox from "components/atoms/WhatsAppChatbox";
import apolloClient from "lib/wordpress/connector";

/**
 * Render the App component.
 *
 * @author WebDevStudios
 * @param  {object}  props           The component attributes as props.
 * @param  {object}  props.Component Page component to display.
 * @param  {boolean} props.pageProps Page component props.
 * @return {Element}                 The App component.
 */
export default function App({ Component, pageProps }) {
  /**
   * Wrap the app in the ApolloProvider component.
   *
   * @see https://www.apollographql.com/docs/react/api/react/hooks/#the-apolloprovider-component
   */

  // Check for errors.
  const error = pageProps?.error;
  let errorMessage = pageProps?.errorMessage ?? "An unknown error occurred.";
  // Trim trailing period - added via Error component.
  errorMessage = errorMessage.replace(/\.$/g, "");

  // Extract specific props from page props.
  const { mainMenuItems, preview, session, ...passThruProps } = pageProps;

  const componentProps = {
    ...passThruProps,
    post: {
      ...passThruProps?.post,
    },
  };

  // Initialize state for WordPress context provider.
  const [wp] = useState({
    mainMenuItems: mainMenuItems,
  });

  return (
    <ApolloProvider client={apolloClient}>
      <WordPressProvider value={wp}>
        {error ? (
          <Custom500 />
        ) : (
          <>
            <WhatsAppChatbox />
            <ExitPreview preview={preview} />
            <Component {...componentProps} />
          </>
        )}
      </WordPressProvider>
    </ApolloProvider>
  );
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired,
};
