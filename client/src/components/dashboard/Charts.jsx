import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

function Charts({ history }) {
  if (!history.length) return null;

  const labels = history
    .slice()
    .reverse()
    .map((_, i) => `Audit ${i + 1}`);

  const data = {
    labels,
    datasets: [
      {
        label: "Response Time (ms)",
        data: history
          .slice()
          .reverse()
          .map((item) => Number(item.responseTime.replace(" ms", ""))),
        borderWidth: 3,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="card bg-base-100 shadow-xl mt-8">
      <div className="card-body">
        <h2 className="card-title">Response Time Trend</h2>

        <Line data={data} />
      </div>
    </div>
  );
}

export default Charts;
