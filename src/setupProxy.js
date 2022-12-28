const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http:///ddang3.link/",
      changeOrigin: true,
    })
  );
};
