import { useState } from "react";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import SearchBar from "./components/audit/SearchBar";
import StatsGrid from "./components/dashboard/StatsGrid";
import SeoCard from "./components/dashboard/SeoCard";
import Recommendations from "./components/dashboard/Recommendations";
import MetadataCard from "./components/audit/MetadataCard";
import HistoryTable from "./components/audit/HistoryTable";
import Charts from "./components/dashboard/Charts";

function App() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handleAudit = async () => {
    if (!url.trim()) {
      alert("Please enter a website URL");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post("http://localhost:8000/api/audit", {
        url,
      });

      setResult(response.data);

      setHistory((prev) => {
        const updated = [response.data, ...prev];

        // Keep only latest 10 audits
        return updated.slice(0, 10);
      });
    } catch (error) {
      console.error(error);

      alert("Audit failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-7xl mx-auto p-6 lg:p-8">
        {/* Navbar */}
        <Navbar />

        {/* Search */}
        <SearchBar
          url={url}
          setUrl={setUrl}
          loading={loading}
          handleAudit={handleAudit}
        />

        {/* Dashboard */}
        {result && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
            {/* KPI Cards */}
            <div className="lg:col-span-12">
              <StatsGrid result={result} />
            </div>

            {/* SEO */}
            <div className="lg:col-span-4">
              <SeoCard result={result} />
            </div>

            {/* Recommendations */}
            <div className="lg:col-span-8">
              <Recommendations result={result} />
            </div>

            {/* Charts */}
            <div className="lg:col-span-12">
              <Charts history={history} />
            </div>

            {/* Metadata */}
            <div className="lg:col-span-5">
              <MetadataCard result={result} />
            </div>

            {/* History */}
            <div className="lg:col-span-7">
              <HistoryTable history={history} onSelect={setResult} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
