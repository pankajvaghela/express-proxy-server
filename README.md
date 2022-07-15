# express-proxy-server

A very basic Proxy Server using Express.js

## About

Goal of this project to fix CORS issue when integrating with APIs from local app.

This basic server allows you to specify server you want to proxy and client domain (mostly http://localhost:3001) and you are good to proxy.

## Usage

### Installation

Clone this repo & install node modules

```
git clone https://github.com/pankajvaghela/express-proxy-server && cd express-proxy-server && yarn install
```

### Configuration 🪛

Open `proxy-config.js` file in root of project and change `client.origin` & `server.target` as per your needs.

Open `package.json` and change PORT to the one you wish in `dev` script, by default it is 3001.

### Start server 🚀

Run dev script to start server, in development mode.

```
yarn dev
```

and your proxy server is up and running.

Happy Proxy-ing!!
