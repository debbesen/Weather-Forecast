const inputValue = document.querySelector(".weatherInput");
const button = document.querySelector(".submit");
const tempValue = document.querySelector(".temp");
const cityName = document.querySelector(".city");
const descValue = document.querySelector(".desc"); 

button.addEventListener("click",function(){
    fetch("http://api.openweathermap.org/data/2.5/forecast?q="+ inputValue.value +"&appid=df71b48574ba2e681a19b327fc8923f1")
        .then(response => response.json())
        .then(data => console.log(data));
});

const description = response["list"][0]["weather"][0]["description"];
const temp = response["list"][0]["main"][temp];
const city = response["city"]["name"];

