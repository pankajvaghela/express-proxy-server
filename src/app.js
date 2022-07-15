var cors = require("cors");
var middleware = require("http-proxy-middleware");
var app = require("./express");
var appUtils = require("./expressUtils");
var proxyConfig = require("../proxy-config");

app.use(
  cors({
    origin: [proxyConfig.client.origin],
    credentials: proxyConfig.client.credentials,
  })
);

app.use(
  "*",
  middleware.createProxyMiddleware({
    target: proxyConfig.server.target,
    changeOrigin: proxyConfig.server.changeOrigin ?? true,
  })
);

appUtils(app);

module.exports = app;
