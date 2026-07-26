import NodeCache from "node-cache";

// Cache items for 5 minutes (300 seconds)
const cache = new NodeCache({
  stdTTL: 300, // standard time to live in seconds
});

export default cache;
