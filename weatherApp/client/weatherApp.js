const API_KEY = process.env.REACT_APP_API_KEY;
import REACT_APP_API_KEY from "/env"

var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var cityName = document.querySelector('.cityName');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+{REACT_APP_API_KEY})
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
    
        cityName.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    })

.catch(err => alert("Wrong city name. Please try again."))    
})