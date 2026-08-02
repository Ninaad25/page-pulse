function MetadataCard({ result }) {
  if (!result) return null;

  return (
    <div className="card bg-base-100/70 backdrop-blur-xl border border-base-300 shadow-2xl">
      <div className="card-body">
        <h2 className="card-title text-2xl">Website Metadata</h2>

        <div className="divider"></div>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-primary">Title</h3>

            <p>{result.title}</p>
          </div>

          <div>
            <h3 className="font-bold text-primary">Description</h3>

            <p>{result.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetadataCard;
