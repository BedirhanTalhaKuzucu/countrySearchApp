export const getCountryData = (setData) => {


  const endpoint = "https://countries.trevorblades.com/";
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const COUNTRY_QUERY = `
  {
    countries {
      code
      name
    }
  }
`;

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
    body: JSON.stringify({ query: COUNTRY_QUERY }),
  };

  fetch(endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      setData(result.data.countries)
    })
    .catch((error) => console.log("error", error));
};
