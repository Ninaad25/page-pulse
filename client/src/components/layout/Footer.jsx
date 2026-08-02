import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-20">
      <h2 className="text-2xl font-bold">Page Pulse</h2>

      <p>Professional Website SEO Audit Platform</p>

      <div className="flex gap-5 text-2xl">
        <a
          href="https://github.com/Ninaad25/page-pulse"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://page-pulse-azure.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          <FaGlobe />
        </a>

        <a
          href="https://linkedin.com/in/YOUR-LINKEDIN"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      <p className="opacity-70 text-sm">
        Built with React • Express • Vite • DaisyUI • Chart.js • Render • Vercel
      </p>

      <p className="opacity-50 text-xs">
        © 2026 Ninaad Mhadalkar. All rights reserved.
      </p>
    </footer>
  );
}
