import React from "react";
import { getStateContext } from "./StateContextProvider";

export default function() {
  const [{ query }, dispatch] = getStateContext();

  return (
    <div style={{ border: "blue 2px solid" }}>
      <h5>Componsant recherche</h5>
      <button
        onClick={() =>
          dispatch({
            type: "updateQuery",
            query: {
              query: { match_all: {} },
              from: 0,
              size: 10
            }
          })
        }
      >
        ALL
      </button>
      <div>Query: {JSON.stringify(query)}</div>
    </div>
  );
}
