import React, { useState } from "react";
import { getStateContext } from "./StateContextProvider";

const limit = { from: 0, size: 10 };

export default function({ customQuery }) {
  const [{ query }, dispatch] = getStateContext();
  const [value, setValue] = useState();
  return (
    <div style={{ border: "blue 2px solid" }}>
      <h5>Componsant recherche</h5>
      <input
        type="text"
        value={value}
        onChange={e => {
          setValue(e.target.value);
          dispatch({
            type: "updateQuery",
            query: { ...customQuery(e.target.value), ...limit }
          });
        }}
      />
      <div>Query: {JSON.stringify(query)}</div>
    </div>
  );
}
