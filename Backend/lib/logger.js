// logger.js
const logger = (req, res, next) => {
  console.log("===== Incoming Request =====");
  console.log("Method:", req.method);
  console.log("URL:", req.originalUrl);
  console.log("Headers:", JSON.stringify(req.headers, null, 2));
  console.log("Query:", JSON.stringify(req.query, null, 2));
  console.log("Params:", JSON.stringify(req.params, null, 2));
  console.log("Body:", JSON.stringify(req.body, null, 2));
  console.log("============================\n");

  next();
};

export default logger;
