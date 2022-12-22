const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http:///3.34.237.17:8080/",
      changeOrigin: true,
    })
  );
};
