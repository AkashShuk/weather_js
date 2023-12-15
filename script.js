const apiKey="af70f28a50ff7598755c70f7465f2c95";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data = await response.json();
    
    console.log(data);

  
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="https://cdn-icons-png.flaticon.com/512/4834/4834559.png";
    }
    else if(data.weather[0].main="Clear"){
         weatherIcon.src="https://static-00.iconduck.com/assets.00/weather-clear-symbolic-icon-511x512-zfj6vb21.png";
    }
    else if(data.weather[0].main="Rain"){
        weatherIcon.src="https://cdn-icons-png.flaticon.com/128/2469/2469994.png";
    }
    else if(data.weather[0].main="Mist"){

        weatherIcon.src="https://i.pinimg.com/564x/1e/c4/e8/1ec4e83f5d60afc434ac5dc8a9efcdf4.jpg";
    }


}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})


