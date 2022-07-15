module.exports.proxyMap = {
  client: {
    // Domain for client where your app is running.
    origin: "http://localhost:3000",
    // Usually when doing authentication with cookie or token, set this to true.
    credentials: true,
  },
  server: {
    // Domain to server you need to proxy.
    target: "https://github.com",
    changeOrigin: true,
  },
};
