import queryMediaAttributes from "lib/wordpress/media/queryMediaAttributes";
import apolloClient from "lib/wordpress/connector";

/**
 * Retrieve media details by ID.
 *
 * @author WebDevStudios
 * @param  {number} id The media's database ID.
 * @return {object}    Object containing Apollo client instance and post data or error object.
 */
export default async function getMediaByID(id) {
  // No ID? Bail...
  if (!id) {
    return {};
  }

  // Execute query.
  const media = await apolloClient
    .query({
      query: queryMediaAttributes,
      variables: {
        id: id,
      },
    })
    .then((media) => media?.data?.mediaItem ?? null)
    .catch((error) => {
      return {
        isError: true,
        message: error.message,
      };
    });

  return media;
}
