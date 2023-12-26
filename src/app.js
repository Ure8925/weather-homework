function showWeatherInfo(response){
    let temperatureElement =document.querySelector("#temperature");
    let temperature =response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000 );
    
    timeElement.innerHTML = newDate(date);
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windElement.innerHTML = `${response.data.wind.speed}km/h`;
     temperatureElement.innerHTML = Math.round(temperature);
       
}

function newDate(date){
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days =["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];
     let day = days[date.getDay()];

     if (minutes < 10) {
     minutes = `0${minutes}`;
     }

     if(hours < 10) {
        hours = `0${hours}`;
     }

     return `${day} ${hours}:${minutes}`;
     
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