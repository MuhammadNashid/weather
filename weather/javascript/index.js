const apikey = "1bf9fbe3c401b0c2f1f2d02bd26ce1dc"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=germany&appid=1bf9fbe3c401b0c2f1f2d02bd26ce1dc"

async function checkWeather(){
    const res = await fetch(apiUrl + `&appid=${apikey}`);
    var data= await res.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp+ "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
document.querySelector(".weather").style.display="block"    
}

serarchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)    
})