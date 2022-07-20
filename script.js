function fetchData() {
    let inputValue=search_box.value
    console.log(`${inputValue}`);
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputValue + "&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric")
    .then(res=>res.json())
    .then(data=>displayData(data))
    .catch(err=>alert("wrong city name"))
}

function displayData(data) {
    console.log(data);
    let htmlData=`
    <h3 class="city">Weather in ${data.name}</h3>
    <h4 class="temp">Temperature : ${data.main.temp}°c</h4>
    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="">
    <h5 class="climate">${data.weather[0].description}</h5>
    <h5 class="humidity">Humidity: ${data.main.humidity}</h5>
    <h5> class="wind">WindSpeed: ${data.wind.speed}km/hr<h5>`

    description.innerHTML=htmlData
    
}