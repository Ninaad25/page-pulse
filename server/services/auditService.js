import axios from "axios";
import * as cheerio from "cheerio";
import validator from "validator";
import cache from "../utils/cache.js";

export async function analyzeWebsite(url) {
  // Check cache first
  const cachedResult = cache.get(url);

  if (cachedResult) {
    return {
      ...cachedResult,
      cached: true,
    };
  }

  // Validate URL
  if (!validator.isURL(url, { require_protocol: true })) {
    throw new Error("Please enter a valid URL including http:// or https://");
  }

  // 2. Measure response time
  const start = Date.now();

  // 3. Download website
  const response = await axios.get(url, {
    timeout: 10000,
    headers: {
      "User-Agent": "PagePulseBot/1.0",
    },
  });

  const responseTime = Date.now() - start;

  // 4. Load HTML
  const $ = cheerio.load(response.data);

  // 5. Extract information
  const title = $("title").text().trim();

  const description =
    $('meta[name="description"]').attr("content") || "No description found";

  const links = $("a").length;

  const images = $("img").length;

  const h1Count = $("h1").length;
  const h2Count = $("h2").length;

  const missingAlt = $("img").filter((_, img) => {
    return !$(img).attr("alt");
  }).length;

  const pageSizeKB = (Buffer.byteLength(response.data, "utf8") / 1024).toFixed(
    2,
  );

  const auditTime = new Date().toISOString();

  const result = {
    url,
    status: response.status,
    responseTime: `${responseTime} ms`,
    title,
    description,
    links,
    images,
    headings: {
      h1: h1Count,
      h2: h2Count,
    },
    missingAlt,
    pageSizeKB: `${pageSizeKB} KB`,
    auditTime,
  };

  cache.set(url, result);

  return {
    ...result,
    cached: false,
  };

  // 6. Return result
  return {
    url,
    status: response.status,
    responseTime: `${responseTime} ms`,
    title,
    description,
    links,
    images,
    headings: {
      h1: h1Count,
      h2: h2Count,
    },
    missingAlt,
    pageSizeKB: `${pageSizeKB} KB`,
    auditTime,
    cached: false,
  };
}
