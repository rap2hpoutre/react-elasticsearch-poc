import React, { useEffect, useState } from "react";
import { msearch, resultsQuery } from "./utils";
import { getStateContext } from "./StateContextProvider";

export default function() {
  const [{ queries }] = getStateContext();
  const [data, setData] = useState([]);
  const query = resultsQuery(queries);

  useEffect(() => {
    async function fetchData() {
      const result = await msearch({ query, size: 10 });
      setData(result.responses[0].hits.hits);
    }
    fetchData();
  }, [JSON.stringify(query)]);

  return (
    <div style={{ border: "green 2px solid", margin: "10px" }}>
      <h5>resultats</h5>
      {data.map(r => (
        <div key={r._source.REF}>Résultat n°{r._source.TICO}</div>
      ))}
    </div>
  );
}
