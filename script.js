const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
let temp;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '38f0721479mshd68309b87082e95p1e2472jsn3a6036b04ebb',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


async function checkWeather(city){
   const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)

   console.log(response);

   if(response.status >= 400){
       document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
   }else{
       let data = await response.json();
       console.log(data);
       document.querySelector(".city").textContent =  temp;
       document.querySelector(".temp").textContent = data.temp + "°c";
       document.querySelector(".humidity").textContent = data.humidity + "%";
       document.querySelector(".wind").textContent = data.wind_speed + " Km/hr";
       document.querySelector(".weather").style.display = "block"
       document.querySelector(".error").style.display = "none";
   }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
    temp = searchBox.value;
    searchBox.value = "";
})







    // console.log(response);
// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));