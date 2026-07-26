function DetailsCard({ result }) {
  return (
    <div className="details">
      <h2>Title</h2>

      <p>{result.title}</p>

      <h2>Description</h2>

      <p>{result.description}</p>
    </div>
  );
}

export default DetailsCard;
