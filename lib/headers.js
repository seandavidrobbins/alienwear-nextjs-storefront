/**
 * Returns the list of headers.
 * @see https://nextjs.org/docs/api-reference/next.config.js/headers
 * @return {Array} The list of headers.
 */
module.exports = function getHeaders() {
  return [
    {
      source: "/api/revalidate",
      headers: [
        {
          key: "Access-Control-Allow-Origin",
          value: process.env.ACCESS_CONTROL_ALLOW_ORIGIN || "*",
        },
      ],
    },
    {
      source: "/fonts/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      source: "/:path*",
      headers: [
        {
          key: "Access-Control-Allow-Origin",
          value: process.env.ACCESS_CONTROL_ALLOW_ORIGIN || "*",
        },
        {
          key: "Permissions-Policy",
          value:
            "geolocation=(), midi=(), sync-xhr=(), microphone=(), camera=(), magnetometer=(), gyroscope=(), fullscreen=(self), payment=()",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000",
        },
        {
          key: "Content-Security-Policy",
          value: `frame-ancestors 'self' ${
            process.env.ACCESS_CONTROL_ALLOW_ORIGIN || ""
          };`,
        },
      ],
    },
  ];
};
