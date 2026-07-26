import { FaSearch } from "react-icons/fa";

function SearchBar({ url, setUrl, loading, handleAudit }) {
  return (
    <div className="card bg-base-100 shadow-xl mt-8">
      <div className="card-body">
        <h2 className="card-title text-2xl">Audit Website</h2>

        <p className="text-base-content/70">
          Enter a website URL to analyse performance and SEO.
        </p>

        <div className="join mt-4 w-full">
          <input
            type="text"
            className="input input-bordered join-item flex-1"
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
            className="btn btn-primary join-item"
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
                <FaSearch />
                Audit
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
