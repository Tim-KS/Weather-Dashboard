var submitBtn = document.querySelector('.userSubmit');
var clearBtn = document.querySelector('.reset');
var userInput = document.querySelector('.userInput');
var locationName = document.querySelector('.locationName');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var windSpeed = document.querySelector('.windSpeed');
var humidity = document.querySelector('.humidity');
var weatherCard = document.querySelector('.display');
var weatherImage = document.querySelector('.weatherImage');

submitBtn.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userInput.value}&appid=90912b8e71d2ca990157e2da341f3687`)
    .then(response => response.json())
        .then(data => {
            console.log(data);
            userInput.value = '';
            var tempKelvin = data.list[0].main.temp;
            var locationValue = data.city.name;
            var locationTemp = Math.round((tempKelvin - 273.15) * 10)/10;
            var locationDesc = data.list[0].weather[0].description;
            var currentHumidity = data.list[0].main.humidity;
            var currentWindSpeed = data.list[0].wind.speed;
            var currentWeatherImage = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
            locationName.innerHTML = locationValue;
            weatherImage.src = currentWeatherImage;
            temp.innerHTML = `${locationTemp}°C`;
            desc.innerHTML = `${locationValue} will experience: ${locationDesc}`;
            humidity.innerHTML = `Humidity: ${currentHumidity}`;
            windSpeed.innerHTML = `Wind Speed: ${currentWindSpeed}km/h`;
        })      
    .catch(err => alert("We lost our weather map!"))
})

clearBtn.addEventListener('click', function(){
    locationName.innerHTML = '';
    temp.innerHTML = '';
    desc.innerHTML = '';
    weatherImage.src = '';
    humidity.innerHTML = '';
    windSpeed.innerHTML = '';
})