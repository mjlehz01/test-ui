module.exports = {
  reactStrictMode: true,
  env: {
    TOKEN: process.env.TOKEN,
    URL_BACKEND: process.env.URL_BACKEND,
  },
};

const intercept = require("intercept-stdout");

function interceptStdout(text) {
  if (text.includes("Duplicate atom key")) {
    return "";
  }
  return text;
}

if (process.env.NODE_ENV === "development") {
  intercept(interceptStdout);
}
