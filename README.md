# express-proxy-server

A very basic Proxy Server using Express.js 

## About 

Goal of this project to fix CORS issue when integrating with APIs from local app.

This basic server allows you to just specify server you want to proxy and client domain (mostly http://localhost:3000) 

## Usage


Step 1 : Clone this repo & install node modules

```
git clone https://github.com/pankajvaghela/express-proxy-server && cd express-proxy-server && yarn install
```

Step 2 : Open `proxy-config.js` file in root of project
Step 3 : Change client.origin & server.target
Steo 4 : Start server!

```
yarn dev
```

and your proxy server is up and running. 






