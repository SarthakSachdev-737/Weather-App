const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "80c638710963c9cb02fc00cc361b8491";
const wethrimg = document.querySelector("#wethrimg");
const searchbtn = document.querySelector("#imgbtn");
const searchbar = document.querySelector("#searchbar");
const invalidcity = document.querySelector("#invalidcity");
const weather = document.querySelector("#weather");

async function wethrapi(city) {
    const response = await fetch(apiurl + city + "&appid=" + apikey);

    if (response.status == '404') {
        invalidcity.style.display = "block";
        weather.style.display = "none";
    }
    else {
        const data = await response.json();
        console.log(data);

        document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#humiditytxt h3").innerHTML = data.main.humidity + "%";
        document.querySelector("#windspdtxt h3").innerHTML = data.wind.speed + " km/h";
        // document.querySelector("#wethrimg").dataset.src = `images/${data.weather[0].main}.png`;





        if (data.weather[0].main == 'Clouds') {
            wethrimg.src = "images/clouds.png";
        }
        else if (data.weather[0].main == 'Clear') {
            wethrimg.src = "images/clear.png";
        }
        else if (data.weather[0].main == 'Drizzle') {
            wethrimg.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == 'Mist') {
            wethrimg.src = "images/mist.png";
        }
        else if (data.weather[0].main == 'Rain') {
            wethrimg.src = "images/rain.png";
        }
        else if (data.weather[0].main == 'Snow') {
            wethrimg.src = "images/snow.png";
        }

        weather.style.display = "block";
        invalidcity.style.display = "none";
    }

}




searchbtn.addEventListener("click", () => {
    wethrapi(searchbar.value);
});