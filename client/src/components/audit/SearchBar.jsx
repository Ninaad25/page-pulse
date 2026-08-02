import { FaSearch } from "react-icons/fa";

function SearchBar({ url, setUrl, loading, handleAudit }) {
  return (
    <div className="card bg-base-100/80 backdrop-blur-xl shadow-2xl border border-base-300 rounded-3xl">
      <div className="card-body">
        <h2 className="text-2xl font-bold mb-4">🌐 Website Audit</h2>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            className="input input-bordered input-lg flex-1"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAudit();
              }
            }}
          />

          <button
            className="btn btn-primary btn-lg px-8"
            onClick={handleAudit}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Auditing...
              </>
            ) : (
              <>
                <FaSearch className="mr-2" />
                Analyze
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
