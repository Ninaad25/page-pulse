import {
  FaBolt,
  FaLink,
  FaImage,
  FaCheckCircle,
  FaHeading,
  FaFileAlt,
  FaDatabase,
  FaUniversalAccess,
} from "react-icons/fa";

import MetricCard from "./MetricCard";

function StatsGrid({ result }) {
  if (!result) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
      <MetricCard
        title="Status"
        value={result.status}
        icon={<FaCheckCircle />}
        color="success"
      />

      <MetricCard
        title="Response"
        value={result.responseTime}
        icon={<FaBolt />}
        color="warning"
      />

      <MetricCard
        title="Links"
        value={result.links}
        icon={<FaLink />}
        color="info"
      />

      <MetricCard
        title="Images"
        value={result.images}
        icon={<FaImage />}
        color="primary"
      />

      <MetricCard
        title="H1"
        value={result.headings?.h1 ?? 0}
        icon={<FaHeading />}
        color="success"
      />

      <MetricCard
        title="H2"
        value={result.headings?.h2 ?? 0}
        icon={<FaHeading />}
        color="info"
      />

      <MetricCard
        title="Missing ALT"
        value={result.missingAlt}
        icon={<FaUniversalAccess />}
        color="error"
      />

      <MetricCard
        title="Page Size"
        value={result.pageSizeKB}
        icon={<FaDatabase />}
        color="primary"
      />
    </div>
  );
}

export default StatsGrid;
