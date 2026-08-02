import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

function SeoCard({ result }) {
  if (!result) return null;

  let score = 100;

  // Meta Description
  if (!result.description || result.description === "No description found") {
    score -= 20;
  }

  // H1
  if (!result.headings || result.headings.h1 === 0) {
    score -= 15;
  }

  // Missing ALT text
  if (result.missingAlt > 0) {
    score -= 15;
  }

  // Response Time
  const response = parseInt(result.responseTime);

  if (response > 1000) {
    score -= 20;
  }

  // Page Size
  const size = parseFloat(result.pageSizeKB);

  if (size > 1000) {
    score -= 10;
  }

  score = Math.max(score, 0);

  const label =
    score >= 90
      ? "Excellent"
      : score >= 75
        ? "Good"
        : score >= 50
          ? "Average"
          : "Needs Improvement";

  const colour = score >= 90 ? "#22c55e" : score >= 75 ? "#f59e0b" : "#ef4444";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card bg-base-100/70 backdrop-blur-xl border border-base-300 shadow-2xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl mb-2">SEO Score</h2>

          <div className="w-52 h-52">
            <CircularProgressbar
              value={score}
              text={`${score}`}
              styles={buildStyles({
                pathColor: colour,
                trailColor: "#e5e7eb",
                textColor: colour,
                textSize: "18px",
              })}
            />
          </div>

          <div
            className={`badge badge-lg mt-6 ${
              score >= 90
                ? "badge-success"
                : score >= 75
                  ? "badge-warning"
                  : "badge-error"
            }`}
          >
            {label}
          </div>

          <div className="divider"></div>

          <div className="stats shadow w-full">
            <div className="stat py-3">
              <div className="stat-title">Score</div>
              <div className="stat-value text-3xl" style={{ color: colour }}>
                {score}
              </div>
              <div className="stat-desc">out of 100</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SeoCard;
