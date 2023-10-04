const url = "https://covid-193.p.rapidapi.com/statistics";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d21f543a00msha65a3c96601c63ap1c58f0jsn70fc6974c4bd",
    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  },
};
const myApi = fetch(url, options);
let globalPeople = [];
let myLoading = false;

myLoading = true;
myApi
  .then((data) => data.json())
  .then((response) => {
    parseData(response);
  })
  .catch((err) => console.error(err));

function parseData(people) {
  // console.log(people);
  const result = people.response.map((person) => {
    const parsedPerson = {
      country: person.country,
      active: person.cases.active,
      new: person.cases.new,
      recovered: person.cases.recovered,
      cases: person.cases.total,
      deaths: person.deaths.total,
      tests: person.tests.total,
    };
    return parsedPerson;
  });
  globalPeople = result;
  myLoading = false;
  console.log(result);
}
function button() {
  const myInput = document.getElementById("search");
  const currentValue = myInput.value;
  const result = globalPeople.find((el) => {
    return el.country == currentValue;
  });
  const active = document.getElementById("active");
  const cases = document.getElementById("cases");
  const deaths = document.getElementById("deaths");
  const New = document.getElementById("new");
  const recovered = document.getElementById("recovered");
  const tests = document.getElementById("tests");
  console.log(active, cases, deaths, New, recovered, tests);

  const HasilAkhir = [
    (active.innerText = result.active),
    (cases.innerText = result.cases),
    (deaths.innerText = result.deaths),
    (New.innerText = result.new),
    (recovered.innerText = result.recovered),
    (tests.innerText = result.tests),
  ];
  return HasilAkhir;
}

window.open(alert("diharapkan menggunakan huruf awal besar"));
