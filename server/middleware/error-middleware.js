const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong from BackendServer";
  const extraMessage = err.extraMessage || "Error from BackendServer";

  return res.status(status).json({ message, extraMessage });
};

module.exports = errorMiddleware;
