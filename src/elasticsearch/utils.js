import fetch from "unfetch";

const ESURL =
  "http://pop-api-staging.eu-west-3.elasticbeanstalk.com/search/merimee";

export function msearch(query) {
  return new Promise(async (resolve, reject) => {
    const rawResponse = await fetch(`${ESURL}/_msearch`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-ndjson"
      },
      body: `{}\n${JSON.stringify(query)}\n`
    });
    const response = await rawResponse.json();
    resolve(response);
  });
}

export function queryFrom(queries) {
  return {
    bool: {
      must:
        queries.size === 0 ? { match_all: {} } : Array.from(queries.values())
    }
  };
}

export function toTermQueries(fields, selectedValues) {
  const queries = [];
  for (let i in fields) {
    for (let j in selectedValues) {
      queries.push({ term: { [fields[i]]: selectedValues[j] } });
    }
  }
  return queries;
}
