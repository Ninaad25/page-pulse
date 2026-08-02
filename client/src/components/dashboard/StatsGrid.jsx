import MetricCard from "./MetricCard";
import { FaCheckCircle, FaClock, FaLink, FaImage } from "react-icons/fa";

function StatsGrid({ result }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mt-6">
      <MetricCard
        title="Status"
        value={result.status}
        icon={<FaCheckCircle className="text-success" />}
        color="border-success"
      />

      <MetricCard
        title="Response Time"
        value={result.responseTime}
        icon={<FaClock className="text-warning" />}
        color="border-warning"
      />

      <MetricCard
        title="Links"
        value={result.links}
        icon={<FaLink className="text-info" />}
        color="border-info"
      />

      <MetricCard
        title="Images"
        value={result.images}
        icon={<FaImage className="text-secondary" />}
        color="border-secondary"
      />
    </div>
  );
}

export default StatsGrid;
