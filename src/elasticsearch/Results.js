import React, { useEffect, useState } from "react";
import { msearch } from "./utils";
import { getStateContext } from "./StateContextProvider";

export default function() {
  const [{ query }] = getStateContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await msearch(query);
      setData(result.responses[0].hits.hits);
    }
    fetchData();
  }, [JSON.stringify(query)]);

  return (
    <div style={{ border: "green 2px solid" }}>
      <h5>resultats</h5>
      {data.map(r => (
        <div>Résultat n°{r._source.TICO}</div>
      ))}
    </div>
  );
}
