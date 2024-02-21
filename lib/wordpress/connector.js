import { APOLLO_STATE_PROP_NAME, initializeApollo } from "lib/apolloConfig";
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { useMemo } from "react";

// Define env vars.
export const wpApiUrlBase =
  process.env.WORDPRESS_URL?.replace(/\/?$/, "/") || "/";
export const wpPreviewSecret = process.env.WORDPRESS_PREVIEW_SECRET;
export const graphQlEndpoint =
  process.env.WORDPRESS_GRAPHQL_ENDPOINT || "graphql";
const wpAppUser = process.env.WORDPRESS_APPLICATION_USERNAME;
const wpAppPass = process.env.WORDPRESS_APPLICATION_PASSWORD;

// Set WP application password auth header.
const wpAuthorization = Buffer.from(`${wpAppUser}:${wpAppPass}`).toString(
  "base64"
);

let wpApolloClient;

/**
 * Middleware operation
 * If we have a session token in localStorage, add it to the GraphQL request as a Session header.
 */
export const middleware = new ApolloLink((operation, forward) => {
  /**
   * If session data exist in local storage, set value as session header.
   */
  const session = process.browser ? localStorage.getItem("woo-session") : null;

  if (session) {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        "woocommerce-session": `Session ${session}`,
      },
    }));
  }

  return forward(operation);
});

/**
 * Afterware operation.
 *
 * This catches the incoming session token and stores it in localStorage, for future GraphQL requests.
 */
export const afterware = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    if (!process.browser) {
      return response;
    }

    /**
     * Check for session header and update session in local storage accordingly.
     */
    const context = operation.getContext();
    const {
      response: { headers },
    } = context;
    const session = headers.get("woocommerce-session");

    if (session) {
      // Remove session data if session destroyed.
      if ("false" === session) {
        localStorage.removeItem("woo-session");

        // Update session new data if changed.
      } else if (localStorage.getItem("woo-session") !== session) {
        localStorage.setItem("woo-session", headers.get("woocommerce-session"));
      }
    }

    return response;
  });
});

/**
 * Create a basic Apollo client for connecting to WP.
 *
 * @see https://www.apollographql.com/docs/react/api/core/ApolloClient/
 * @author WebDevStudios
 * @param  {boolean} auth Whether to include authentication via WP application password.
 * @return {object}       Apollo client instance.
 */
export function createWpApolloClient(auth = false) {
  return new ApolloClient({
    ssrMode: false,
    link: middleware.concat(
      afterware.concat(
        createHttpLink({
          uri: `${process.env.NEXT_PUBLIC_GRAPHQL_URL}`,
          fetch: fetch,
          credentials: "",
          headers: {
            authorization: auth ? `Basic ${wpAuthorization}` : "",
          },
        })
      )
    ),
    cache: new InMemoryCache(),
  });
}

/**
 * Init Apollo for WP and merge with initial state.
 *
 * @author WebDevStudios
 * @param  {*}      initialState Initial Apollo state.
 * @return {object}              WP Apollo client instance.
 */
export function initializeWpApollo(initialState = null) {
  // Only run one instance of the Apollo client.
  const _apolloClient = wpApolloClient ?? createWpApolloClient();

  const newApolloClient = initializeApollo(_apolloClient, initialState);

  // For SSG and SSR always create a new Apollo Client.
  if (typeof window === "undefined") return newApolloClient;

  // Create the Apollo Client once in the client.
  if (!wpApolloClient) wpApolloClient = newApolloClient;

  return newApolloClient;
}

/**
 * Only update when the cache value has changed.
 *
 * @author WebDevStudios
 * @param  {object} pageProps Props from getStaticProps().
 * @return {object}           WP Apollo client instance.
 */
export function useWpApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeWpApollo(state), [state]);
  return store;
}
