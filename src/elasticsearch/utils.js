import fetch from "unfetch";

const ESURL =
  "http://pop-api-staging.eu-west-3.elasticbeanstalk.com/search/merimee";

export function msearch(query) {
  return new Promise(async (resolve, reject) => {
    console.log("query", query);
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

export function aggsFromFields(fields, size, filterValue) {
  function aggFromField(field, filterValue) {
    const t = { field, order: { _count: "desc" }, size };
    if (filterValue) {
      t.include = `.*${filterValue}.*`;
    }
    return {
      [field]: { terms: t }
    };
  }
  let result = {};
  fields.forEach(f => {
    result = { ...result, ...aggFromField(f, filterValue) };
  });
  return { query: { match_all: {} }, size: 0, aggs: result };
}
