const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: process.env.PAYPAL_MODE || "sandbox", // Set 'live' for production
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET,
});

// paypal.configure({
//   mode: "",
//   client_id: "",
//   client_secret: "",
// });

module.exports = paypal;
