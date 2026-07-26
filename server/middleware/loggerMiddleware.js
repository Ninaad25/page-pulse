import logger from "../utils/logger.js";

const loggerMiddleware = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const responseTime = Date.now() - start;

    logger.info({
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      responseTime: `${responseTime} ms`,
      ip: req.ip,
    });
  });

  next();
};

export default loggerMiddleware;
