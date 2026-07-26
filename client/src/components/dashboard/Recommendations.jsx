import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

function Recommendations({ result }) {
  if (!result) return null;

  const tips = [];

  if (result.title) {
    tips.push({
      ok: true,
      text: "Page title found",
    });
  } else {
    tips.push({
      ok: false,
      text: "Add a page title",
    });
  }

  if (result.description !== "No description found") {
    tips.push({
      ok: true,
      text: "Meta description found",
    });
  } else {
    tips.push({
      ok: false,
      text: "Add a meta description",
    });
  }

  if (result.headings?.h1 > 0) {
    tips.push({
      ok: true,
      text: "H1 heading found",
    });
  } else {
    tips.push({
      ok: false,
      text: "Missing H1 heading",
    });
  }

  if (result.missingAlt === 0) {
    tips.push({
      ok: true,
      text: "All images have ALT text",
    });
  } else {
    tips.push({
      ok: false,
      text: `${result.missingAlt} image(s) missing ALT text`,
    });
  }

  return (
    <div className="card bg-base-100 shadow-xl h-full">
      <div className="card-body">
        <h2 className="card-title">Recommendations</h2>

        <div className="space-y-4">
          {tips.map((tip, index) => (
            <div key={index} className="flex items-center gap-3">
              {tip.ok ? (
                <FaCheckCircle className="text-success text-xl" />
              ) : (
                <FaExclamationTriangle className="text-warning text-xl" />
              )}

              <span>{tip.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
