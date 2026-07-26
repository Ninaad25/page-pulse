import { analyzeWebsite } from "../services/auditService.js";
import logger from "../utils/logger.js";

export async function auditWebsite(req, res) {
  try {
    const { url } = req.body;

    const result = await analyzeWebsite(url);

    res.status(200).json(result);
  } catch (error) {
    logger.error({
      message: error.message,
      stack: error.stack,
    });

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
