enum WeatherConditions {
Sunny = "sunny", 
Cloudy = "cloudy", 
Rainy = "rainy",
Snowy = "snowy",
}

console.log(WeatherConditions.Sunny);
console.log(WeatherConditions.Cloudy);
console.log(WeatherConditions.Rainy);
console.log(WeatherConditions.Snowy);

const currentWeather = WeatherConditions.Snowy;
console.log(`The Current weather is ${currentWeather}`);

