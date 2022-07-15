var createError = require("http-errors");
var cors = require("cors");
var middleware = require("http-proxy-middleware");
var app = require("./express");
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

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
