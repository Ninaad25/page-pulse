import { FaGithub, FaLinkedin, FaGlobe, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 rounded-3xl bg-base-200 border border-base-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col items-center text-center gap-6">
        {/* Logo */}
        <div>
          <h2 className="text-3xl font-extrabold text-primary">Page Pulse</h2>
          <p className="text-base-content/70 mt-2">
            Professional Website SEO Audit Platform
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/Ninaad25/page-pulse"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
            aria-label="GitHub Repository"
          >
            <FaGithub />
          </a>

          <a
            href="https://page-pulse-azure.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
            aria-label="Live Demo"
          >
            <FaGlobe />
          </a>

          {/* Replace with your actual LinkedIn URL */}
          <a
            href="https://www.linkedin.com/in/ninaad390/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "React",
            "Vite",
            "Express",
            "Node.js",
            "Axios",
            "Cheerio",
            "DaisyUI",
            "Chart.js",
            "Render",
            "Vercel",
          ].map((tech) => (
            <span key={tech} className="badge badge-outline">
              {tech}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="divider my-0"></div>

        {/* Copyright */}
        <p className="text-sm text-base-content/60 flex items-center gap-2">
          Built with <FaHeart className="text-red-500" /> by{" "}
          <span className="font-semibold">© 2026 Ninaad Mhadalkar</span>
        </p>

        <p className="text-xs text-base-content/50">
          © 2026 Page Pulse. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
