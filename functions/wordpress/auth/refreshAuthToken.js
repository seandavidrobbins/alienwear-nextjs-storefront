import mutationRefreshAuthToken from "lib/wordpress/auth/mutationRefreshAuthToken";
import apolloClient from "lib/wordpress/connector";

/**
 * Get a new auth token using refresh token.
 *
 * @author WebDevStudios
 * @param  {string} refreshToken User refresh token.
 * @return {object}              User data or error object.
 */
export default async function refreshAuthToken(refreshToken) {
  return apolloClient
    .mutate({
      mutation: mutationRefreshAuthToken,
      variables: {
        refreshToken,
      },
    })
    .then(
      (response) =>
        response?.data?.refreshJwtAuthToken?.authToken ?? {
          error: true,
          errorMessage: `An error occurred while trying to fetch auth token.`,
        }
    )
    .catch((error) => {
      return {
        error: true,
        errorMessage: error.message,
      };
    });
}
