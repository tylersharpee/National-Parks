const BASE_URL = 'https://developer.nps.gov/api/v1/parks?stateCode=';
const AUTH = 'api_key=4cH0ycv038Sktxpa8MrXQp1PHQn7Xnob3gPRryJF';

function getParks(state) {
  return fetch(`${BASE_URL}${state}&limit=${store.limit}&${AUTH}`)
    .then(response => response.json())
    .then(list => {
      store.results = list.data;
      store.total = list.total;
      $('#results').html(`${store.results.map(result=>{return Card(result)})}`)
      console.log(list);
      console.log(store.results);
      return list;
    });
}