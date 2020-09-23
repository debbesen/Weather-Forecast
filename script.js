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


// For example, I can tell you without seeing any code that the city name doesn’t make it into the URL
// 12:54
// Wherever you try to pass it or use it, it ends up being undefined by the time the URL is put together
// 12:55
// The error is pointing to script.js, line 5 and line 9, that’s what the browser’s console is pointing to
// 12:56
// So to fix this, you’ll want to take a look at the code around those lines, figure out how the city name is being used, and try to console.log the city name to see if it’s also undefined there
// 12:56
// That sounds like a lot of work, but eventually it’ll become easier to fix common bugs like this
// 12:57
// Is that answer & explanation helpful enough for you to continue working on this?