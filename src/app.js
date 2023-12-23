function showWeatherInfo(response){
    let temperatureElement=document.querySelector("#temperature");
    let temperature=response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML=response.data.city


    temperatureElement.innerHTML=Math.round(temperature);
}

function searchCity(city) {
    let apiKey = "302ea8odf48556tb65f5340850929f02";
   let apiUrl =
     `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(showWeatherInfo);
}

function handleSubmit(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-form-details");
    searchCity(searchInput.value);
}


let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSubmit);
searchCity("Lagos");