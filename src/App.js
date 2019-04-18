import React from "react";
import { Elasticsearch, Results, SearchBox } from "./elasticsearch";

export default function() {
  return (
    <div>
      <Elasticsearch>
        <SearchBox
          customQuery={value => {
            if (!value) {
              return { query: { match_all: {} } };
            }
            return {
              query: {
                multi_match: {
                  query: value,
                  type: "phrase",
                  fields: ["TICO", "TITRE", "TITR", "LEG"]
                }
              }
            };
          }}
        />
        <Results />
      </Elasticsearch>
    </div>
  );
}
