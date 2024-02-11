/**
 * Returns the list of redirects fetched from WordPress.
 * @see https://nextjs.org/docs/api-reference/next.config.js/redirects
 * @see https://redirection.me/developer/rest-api/#api-Redirect-GetRedirects
 * @return {Array} The list of redirects.
 */
module.exports = async function getRedirects() {
  const wpAppUser = process.env.WORDPRESS_APPLICATION_USERNAME;
  const wpAppPass = process.env.WORDPRESS_APPLICATION_PASSWORD;

  // Set WordPress application password auth header.
  const wpAuthorization = Buffer.from(`${wpAppUser}:${wpAppPass}`).toString(
    "base64"
  );

  // TODO: Is there a better place to put this?
  const basicRedirects = [
    {
      source: "/wp-admin/",
      destination: `${process.env.NEXT_PUBLIC_WP_URL}wp-admin/`,
      permanent: true,
    },
  ];

  return [...basicRedirects];
};
