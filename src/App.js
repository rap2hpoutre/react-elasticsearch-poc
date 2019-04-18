import React from "react";
import { Elasticsearch, Results, SearchBox, Facet } from "./elasticsearch";

function customQuery(value) {
  if (!value) {
    return { query: { match_all: {} } };
  }
  return {
    query: {
      multi_match: { query: value, type: "phrase", fields: ["TICO"] }
    }
  };
}

export default function() {
  return (
    <div>
      <Elasticsearch>
        <SearchBox customQuery={customQuery} />
        <Facet fields={["AUTR.keyword"]} />
        <Results />
      </Elasticsearch>
    </div>
  );
}
