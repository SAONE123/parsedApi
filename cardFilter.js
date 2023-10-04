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
  .then(({ response }) => {
    const cases = response[
        for (let i = 0; i < response.length; i++) {
            const element = array[i];
            
        }
    ].country;
    console.log(cases)
  })
  .catch((err) => console.error(err));
