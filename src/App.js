import React from "react";
import { Elasticsearch, Results, SearchBox } from "./elasticsearch";

export default function() {
  return (
    <div>
      <Elasticsearch>
        <SearchBox />
        <Results />
      </Elasticsearch>
    </div>
  );
}
