function SeoCard({ result }) {
  if (!result) return null;

  let score = 0;

  if (result.title) score += 20;
  if (result.description !== "No description found") score += 20;
  if (result.headings?.h1 > 0) score += 20;
  if (result.missingAlt === 0) score += 20;

  const speed = Number(result.responseTime.replace(" ms", ""));

  if (speed < 1000) score += 20;

  return (
    <div className="card bg-base-100 shadow-xl mt-8">
      <div className="card-body text-center">
        <h2 className="card-title justify-center">SEO Score</h2>

        <div
          className="radial-progress text-success"
          style={{
            "--value": score,
            "--size": "10rem",
            "--thickness": "12px",
          }}
          role="progressbar"
        >
          {score}%
        </div>
      </div>
    </div>
  );
}

export default SeoCard;
