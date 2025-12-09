import React, { useEffect, useState } from "react";

export default function PositionsList() {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/positions")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setPositions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading positions...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Positions List</h2>
      <ul>
        {positions.map((pos) => (
          <li key={pos.positionId}>
            <strong>{pos.positionName}</strong>: {pos.description}
          </li>
        ))}
      </ul>
    </div>
  );
}