export default async function getWeatherData(latitude, longitude){
    // current weather
    // const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=dadb14165ec6b2765b2c3c182339bb39&units=metric`);
    // daily
    const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=7&appid=dadb14165ec6b2765b2c3c182339bb39&units=metric`);
    const data = await res.json();
    return data;
}