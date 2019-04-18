import React, { useState } from "react";
import { getStateContext } from "./StateContextProvider";

export default function({ customQuery }) {
  const [{ query }, dispatch] = getStateContext();
  const [value, setValue] = useState();
  return (
    <div style={{ border: "blue 2px solid", margin: "10px" }}>
      <h5>Componsant recherche</h5>
      <input
        type="text"
        value={value}
        onChange={e => {
          setValue(e.target.value);
          dispatch({
            type: "updateQuery",
            query: { ...customQuery(e.target.value) }
          });
        }}
      />
      <div>Query: {JSON.stringify(query)}</div>
    </div>
  );
}
