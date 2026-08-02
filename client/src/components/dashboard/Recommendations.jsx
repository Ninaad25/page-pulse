import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";

function Recommendations({ result }) {
  if (!result) return null;

  const items = [];

  // Meta description
  if (result.description && result.description !== "No description found") {
    items.push({
      good: true,
      text: "Meta description found",
    });
  } else {
    items.push({
      good: false,
      text: "Add a meta description",
    });
  }

  // H1
  if (result.headings?.h1 > 0) {
    items.push({
      good: true,
      text: "H1 heading present",
    });
  } else {
    items.push({
      good: false,
      text: "Missing H1 heading",
    });
  }

  // ALT text
  if (result.missingAlt === 0) {
    items.push({
      good: true,
      text: "All images have ALT text",
    });
  } else {
    items.push({
      good: false,
      text: `${result.missingAlt} images missing ALT text`,
    });
  }

  // Response time
  const response = parseInt(result.responseTime);

  if (response < 1000) {
    items.push({
      good: true,
      text: "Fast response time",
    });
  } else {
    items.push({
      good: false,
      text: "Improve server response time",
    });
  }

  // Page size
  const size = parseFloat(result.pageSizeKB);

  if (size < 1000) {
    items.push({
      good: true,
      text: "Page size is optimized",
    });
  } else {
    items.push({
      good: false,
      text: "Reduce page size",
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card bg-base-100/70 backdrop-blur-xl border border-base-300 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title">💡 Recommendations</h2>

          <div className="space-y-4 mt-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                {item.good ? (
                  <FaCheckCircle className="text-success text-xl" />
                ) : (
                  <FaExclamationTriangle className="text-warning text-xl" />
                )}

                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Recommendations;
