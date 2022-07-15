const ProxyConfig = {
  client: {
    // Domain for client where your app is running.
    origin: process.env.PROXY_CLIENT_ORIGIN ?? "http://localhost:3000",
    // Usually when doing authentication with cookie or token, set this to true.
    credentials: true,
  },
  server: {
    // Domain to server you need to proxy.
    target: process.env.PROXY_SERVER_TARGET ?? "https://github.com",
    changeOrigin: true,
  },
};

module.exports = ProxyConfig;
