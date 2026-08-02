import { FaCheckCircle, FaTimesCircle, FaEye } from "react-icons/fa";

function HistoryTable({ history, onSelect }) {
  if (!history.length) return null;

  return (
    <div className="card bg-base-100/70 backdrop-blur-xl border border-base-300 shadow-2xl">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title text-2xl">Recent Audits</h2>

          <div className="badge badge-primary">{history.length} Audits</div>
        </div>

        <div className="overflow-x-auto mt-4">
          <table className="table">
            <thead>
              <tr>
                <th>Website</th>
                <th>Status</th>
                <th>Speed</th>
                <th>Cached</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {history.map((item, index) => (
                <tr key={index} className="hover cursor-pointer">
                  <td className="font-medium">{item.url}</td>

                  <td>
                    <div
                      className={`badge ${
                        item.status === 200 ? "badge-success" : "badge-error"
                      }`}
                    >
                      {item.status}
                    </div>
                  </td>

                  <td>{item.responseTime}</td>

                  <td>
                    {item.cached ? (
                      <FaCheckCircle className="text-success" />
                    ) : (
                      <FaTimesCircle className="text-error" />
                    )}
                  </td>

                  <td>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => onSelect(item)}
                    >
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HistoryTable;
