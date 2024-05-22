import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  console.log("Detail ID:", id);

  return (
    <div>
      <h1>Detail Page</h1>
      <p>Detail ID: {id}</p>
    </div>
  );
}

export default Detail;
