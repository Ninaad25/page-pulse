import { motion } from "framer-motion";

function MetricCard({ icon, title, value, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className={`card bg-base-100/80 backdrop-blur-xl shadow-2xl border-l-4 ${color}`}
    >
      <div className="card-body">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm opacity-70">{title}</p>
            <h2 className="text-3xl font-bold mt-2">{value}</h2>
          </div>

          <div className="text-5xl">{icon}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default MetricCard;
