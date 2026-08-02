import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="hero rounded-3xl bg-linear-to-r from-primary via-secondary to-accent text-primary-content shadow-2xl mb-8"
    >
      <div className="hero-content text-center py-20">
        <div className="max-w-3xl">
          <div className="badge badge-outline badge-lg mb-6">
            🚀 AI Powered Website Auditor
          </div>

          <h1 className="text-5xl md:text-6xl font-black">Page Pulse</h1>

          <p className="text-xl mt-6 opacity-90">
            Analyse any website for performance, SEO and metadata in seconds.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
