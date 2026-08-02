import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaBolt,
  FaChartLine,
  FaFilePdf,
} from "react-icons/fa";
import Footer from "./components/layout/Footer";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="hero rounded-3xl bg-linear-to-r from-primary via-secondary to-accent text-primary-content shadow-2xl mb-10 overflow-hidden"
    >
      <div className="hero-content text-center py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="badge badge-outline badge-lg bg-white/10 border-white/20 text-white mb-6">
            🚀 Professional Website SEO Auditor
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            Page Pulse
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mt-6 opacity-90 leading-relaxed">
            Audit any website for <span className="font-bold">SEO</span>,{" "}
            <span className="font-bold">Performance</span>,{" "}
            <span className="font-bold">Metadata</span> and generate
            professional PDF reports in seconds.
          </p>

          {/* Feature Chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <div className="badge badge-success badge-lg gap-2 py-4">
              <FaBolt />
              Performance
            </div>

            <div className="badge badge-info badge-lg gap-2 py-4">
              <FaChartLine />
              SEO Analytics
            </div>

            <div className="badge badge-warning badge-lg gap-2 py-4">
              <FaFilePdf />
              PDF Reports
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="https://page-pulse-azure.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-neutral btn-lg"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>

            <a
              href="https://github.com/Ninaad25/page-pulse"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary"
            >
              <FaGithub />
              GitHub Repository
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </motion.section>
  );
}

export default Hero;
