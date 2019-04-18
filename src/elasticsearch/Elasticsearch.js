import React from "react";
import { StateContextProvider } from "./StateContextProvider";

export default function(props) {
  const initialState = {
    query: { bool: { must: [{ match_all: {} }] } }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "updateQuery":
        return {
          ...state,
          query: { bool: { must: [action.query] } }
        };
      default:
        return state;
    }
  };

  return (
    <StateContextProvider initialState={initialState} reducer={reducer}>
      <h4>COmposant principal</h4>
      <div style={{ border: "red 2px solid" }}>{props.children}</div>
    </StateContextProvider>
  );
}
