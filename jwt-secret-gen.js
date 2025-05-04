const crypto = require("crypto");
const fs = require("fs");
const secret = crypto.randomBytes(32).toString("hex");
fs.writeFileSync(".env.secret", `JWT_SECRET="${secret}"\n`, { flag: "w" });
console.log("JWT Secret generated and written to .env");
