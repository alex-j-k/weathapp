const key  = 'tFlfX5ZFpnWErhD84pVb2Vhrb4J66IW4';

// GET WEATHER INFO

const getWeather = async (id) => {

const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
const query = `${id}?apikey=${key}`;

const response  = await fetch(base + query);
const data = await response.json();

return data[0]

};

// GET CITY INFORMATION
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

const response = await fetch(base + query);

const data = await response.json();

return data[0];

};


getCity('manchester')
    .then(data => { 
       return getWeather(data.Key); 
    }).then(data => console.log(data))
    .catch(err => console.log(err));



















// location endpoint
// http://dataservice.accuweather.com/locations/v1/cities/search


// curretn connected
// http://dataservice.accuweather.com/currentconditions/v1/{locationKey}
