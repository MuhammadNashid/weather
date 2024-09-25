const apikey = "1bf9fbe3c401b0c2f1f2d02bd26ce1dc"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")

async function checkweather(city){
    const response=await fetch(apiUrl+city +`&appid=${apikey}`)
    var data=await response.json()

    // console.log(data);
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML=data.wind.speed+ "km/h";

if(data.weather[0].main=="Clouds"){
    weatherIcon.src="./images/cloudicon.png"
}
else if(data.weather[0].main=="Sunny"){
    weatherIcon.src="./images/clearicon.ico"
}
else if(data.weather[0].main=="Rain"){
    weatherIcon.src="./images/rainicon.png"
}
else if(data.weather[0].main=="Mist"){
    weatherIcon.src="./images/misticon.png"
}
else if(data.weather[0].main=="Clear"){
    weatherIcon.src="./images/clearicon1.webp"
}
document.querySelector(".weather").style.display="block"
changeBackground(data.weather[0].main);
}

function changeBackground(weatherCondition) {
    let backgroundImage;
    
    switch (weatherCondition) {
        case 'Clear':
            backgroundImage = url("./images/clearbg.jpg");
            break;
        case 'Clouds':
            backgroundImage = url("./images/cloudbg.jpg");
            break;
        case 'Rain':
            backgroundImage = url("./images/rainbg.jpg");
            break;
        case 'Sunny':
            backgroundImage = url("./images/sunny.avif");
            break;
        default:
            backgroundImage = url("./images/rainicon.png");
            break;
    }

    document.body.style.backgroundImage = backgroundImage;

}

searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value)
})