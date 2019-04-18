import React, { useState, useEffect } from "react";
import { msearch, aggsFromFields } from "./utils";

export default function({ fields }) {
  const [data, setData] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [size, setSize] = useState(5);

  useEffect(() => {
    async function fetchData() {
      const result = await msearch(aggsFromFields(fields, size, filterValue));
      setData(result.responses[0].aggregations[fields[0]].buckets);
    }
    fetchData();
  }, [filterValue, size]);

  return (
    <div style={{ border: "orange 2px solid", margin: "10px" }}>
      <h5>Facette</h5>
      <input
        value={filterValue}
        placeholder="Filter facet"
        onChange={e => {
          setFilterValue(e.target.value);
        }}
      />
      <ul>
        {data.map(e => (
          <li key={e.key}>
            {e.key} ({e.doc_count})
          </li>
        ))}
      </ul>
      {data.length === size ? (
        <button onClick={() => setSize(size + 5)}>Voir plus</button>
      ) : null}
    </div>
  );
}
