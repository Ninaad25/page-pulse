function HistoryList({ history, clearHistory, setResult }) {
  if (history.length === 0) return null;

  return (
    <div className="history">
      <div className="history-header">
        <h2>Audit History</h2>

        <button className="clear-btn" onClick={clearHistory}>
          Clear
        </button>
      </div>

      {history.map((item) => (
        <div
          key={item.id}
          className="history-item"
          onClick={() => setResult(item)}
        >
          <strong>{item.url}</strong>

          <span>{item.status}</span>

          <span>{item.responseTime}</span>
        </div>
      ))}
    </div>
  );
}

export default HistoryList;
