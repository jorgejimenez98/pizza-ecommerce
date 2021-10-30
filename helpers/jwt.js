const expressJwt = require("express-jwt");

// Method to Protect API authentication
// This is for make sure that the frontend sends a token for each view
function authJWT() {
  const secret = "secret_token_string";
  return expressJwt({
    secret,
    algorithms: ["HS256"],
    isRevoked: isRevoked,
  }).unless({
    path: [
      // Paths that does not need to be authenticated
      { url: /\/api\/pizzas(.*)/, methods: ["GET", "OPTIONS"] },
      { url: /\/api\/orders(.*)/, methods: ["GET", "OPTIONS", "POST"] },
      { url: "/api/orders", methods: ["POST"] },
      "/api/users/login",
      "/api/users/register",
    ],
  });
}

async function isRevoked(req, payload, done) {
  if (!payload.isAdmin) {
    done(null, true);
  }
  done();
}

module.exports = authJWT;
