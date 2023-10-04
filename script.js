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
      country: person.continent,
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
  console.log(result);
}

// const active = document.getElementById("active");
// const cases = document.getElementById("cases");
// const deaths = document.getElementById("deaths");
// const New = document.getElementById("new");
// const recovered = document.getElementById("recovered");
// const tests = document.getElementById("tests");
// console.log(active, cases, deaths, New, recovered, tests);

// const HasilAkhir = [
//   (active.innerText = hasil.active),
//   (cases.innerText = hasil.cases),
//   (deaths.innerText = hasil.deaths),
//   (New.innerText = hasil.new),
//   (recovered.innerText = hasil.recovered),
//   (tests.innerText = hasil.tests),
// ];
// if ((HasilAkhir.innerText = null)) {
//   innerText = 0;
// }
// return HasilAkhir;
