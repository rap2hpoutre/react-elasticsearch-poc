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
