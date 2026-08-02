import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import jsPDF from "jspdf";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import SearchBar from "./components/audit/SearchBar";

import StatsGrid from "./components/dashboard/StatsGrid";
import SeoCard from "./components/dashboard/SeoCard";
import Recommendations from "./components/dashboard/Recommendations";
import Charts from "./components/dashboard/Charts";

import MetadataCard from "./components/audit/MetadataCard";
import HistoryTable from "./components/audit/HistoryTable";
import Footer from "./components/layout/Footer";



function App() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handleAudit = async () => {
    if (!url.trim()) {
      toast.error("Please enter a website URL.");
      return;
    }

    try {
      setLoading(true);

      const API_URL = import.meta.env.VITE_API_URL;

      const response = await axios.post(`${API_URL}/api/audit`, {
        url,
      });

      setResult(response.data);

      toast.success("Website audited successfully!");

      setHistory((prev) => {
        const updated = [response.data, ...prev];
        return updated.slice(0, 10);
      });
    } catch (error) {
      console.error(error);

      if (error.response) {
        toast.error(error.response.data.error || "Server error");
      } else if (error.request) {
        toast.error("Cannot connect to the backend.");
      } else {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };


  const exportPDF = () => {
  if (!result) {
    toast.error("No audit available.");
    return;
  }

  const pdf = new jsPDF("p", "mm", "a4");

  // ----------------------------
  // Calculate SEO Score
  // ----------------------------
  let score = 100;

  if (
    !result.description ||
    result.description === "No description found"
  )
    score -= 20;

  if (!result.headings || result.headings.h1 === 0)
    score -= 15;

  if (result.missingAlt > 0)
    score -= 15;

  const responseTime = parseInt(result.responseTime);

  if (responseTime > 1000)
    score -= 20;

  const pageSize = parseFloat(result.pageSizeKB);

  if (pageSize > 1000)
    score -= 10;

  score = Math.max(score, 0);

  const grade =
    score >= 90
      ? "Excellent"
      : score >= 75
      ? "Good"
      : score >= 50
      ? "Average"
      : "Needs Improvement";

  // ----------------------------
  // Header
  // ----------------------------

  pdf.setFillColor(37, 99, 235);
  pdf.rect(0, 0, 210, 28, "F");

  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(22);
  pdf.setFont("helvetica", "bold");
  pdf.text("PAGE PULSE", 20, 18);

  pdf.setFontSize(11);
  pdf.text("Website Audit Report", 20, 24);

  // ----------------------------

  pdf.setTextColor(0, 0, 0);

  let y = 42;

  pdf.setFontSize(16);
  pdf.setFont("helvetica", "bold");
  pdf.text("Website Information", 20, y);

  y += 10;

  pdf.setFont("helvetica", "normal");

  pdf.text(`URL: ${url}`, 20, y);

  y += 8;

  pdf.text(`Generated: ${new Date().toLocaleString()}`, 20, y);

  y += 15;

  // ----------------------------

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(16);

  pdf.text("SEO Score", 20, y);

  y += 10;

  pdf.setFontSize(30);

  pdf.text(`${score}/100`, 20, y);

  pdf.setFontSize(14);

  pdf.text(grade, 75, y);

  y += 18;

  // ----------------------------

  pdf.setFontSize(16);
  pdf.setFont("helvetica", "bold");
  pdf.text("Audit Summary", 20, y);

  y += 10;

  pdf.setFontSize(12);
  pdf.setFont("helvetica", "normal");

  const rows = [
    ["HTTP Status", result.status],
    ["Response Time", result.responseTime],
    ["Page Size", `${result.pageSizeKB} KB`],
    ["Images", result.images],
    ["Links", result.links],
    ["Missing ALT", result.missingAlt],
    ["H1 Headings", result.headings?.h1 ?? 0],
    ["H2 Headings", result.headings?.h2 ?? 0],
    ["Title", result.title || "N/A"],
  ];

  rows.forEach(([label, value]) => {
    pdf.setFont("helvetica", "bold");
    pdf.text(`${label}:`, 20, y);

    pdf.setFont("helvetica", "normal");
    pdf.text(String(value), 70, y);

    y += 8;
  });

  y += 8;

  // ----------------------------

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(16);
  pdf.text("Recommendations", 20, y);

  y += 10;

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(12);

  const recommendations = [];

  if (
    result.description &&
    result.description !== "No description found"
  ) {
    recommendations.push("✓ Meta description present");
  } else {
    recommendations.push("• Add a meta description.");
  }

  if (result.headings?.h1 > 0) {
    recommendations.push("✓ H1 heading found.");
  } else {
    recommendations.push("• Add an H1 heading.");
  }

  if (result.missingAlt === 0) {
    recommendations.push("✓ All images have ALT text.");
  } else {
    recommendations.push(
      `• ${result.missingAlt} image(s) missing ALT text.`
    );
  }

  if (responseTime < 1000) {
    recommendations.push("✓ Good response time.");
  } else {
    recommendations.push("• Improve server response time.");
  }

  if (pageSize < 1000) {
    recommendations.push("✓ Page size is optimised.");
  } else {
    recommendations.push("• Reduce page size.");
  }

  recommendations.forEach((item) => {
    pdf.text(item, 25, y);
    y += 8;
  });

  // ----------------------------

  pdf.setDrawColor(180);

  pdf.line(20, 280, 190, 280);

  pdf.setFontSize(10);

  pdf.text(
    "Generated by Page Pulse • React + Express + DaisyUI",
    20,
    286
  );

  pdf.save("page-pulse-report.pdf");

  toast.success("PDF exported successfully!");
};

  return (
    <div className="min-h-screen bg-linear-to-br from-base-200 via-base-100 to-base-300">
      <div className="max-w-7xl mx-auto p-6 lg:p-8">
        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <Hero />

        {/* Search */}
        <SearchBar
          url={url}
          setUrl={setUrl}
          loading={loading}
          handleAudit={handleAudit}
        />

        {/* Export Button */}
        {result && (
          <div className="flex justify-end my-6">
            <button onClick={exportPDF} className="btn btn-primary">
              📄 Export PDF
            </button>
          </div>
        )}

        {/* Dashboard */}
        {result && (
          <div id="report" className="space-y-8 mt-8">
            {/* Statistics */}
            <StatsGrid result={result} />

            {/* SEO + Recommendations */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-1">
                <SeoCard result={result} />
              </div>

              <div className="xl:col-span-2">
                <Recommendations result={result} />
              </div>
            </div>

            {/* Charts */}
            <Charts history={history} />

            {/* Metadata + History */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
              <div className="xl:col-span-5">
                <MetadataCard result={result} />
              </div>

              <div className="xl:col-span-7">
                <HistoryTable history={history} onSelect={setResult} />
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
