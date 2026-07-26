import React from "react";

const colorClasses = {
  primary: "text-primary",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
  info: "text-info",
};

function MetricCard({ title, value, icon, color = "primary" }) {
  return (
    <div className="stat bg-base-100 rounded-2xl shadow-lg border border-base-300 hover:shadow-2xl transition-all duration-300">
      <div className={`text-3xl ${colorClasses[color] || "text-primary"}`}>
        {icon}
      </div>

      <div className="stat-title mt-2">{title}</div>

      <div
        className={`stat-value text-4xl ${colorClasses[color] || "text-primary"}`}
      >
        {value}
      </div>
    </div>
  );
}

export default MetricCard;
