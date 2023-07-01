export default async function fromCity(city) {
  const res = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=dadb14165ec6b2765b2c3c182339bb39`
  );
  const data = await res.json();
  // console.log(data);
  if (data.length === 0)
    return { name: "EEE", latitude: undefined, longitude: undefined };
  else {
    const { lat, lon, name } = data[0];
    return { latitude: lat, longitude: lon, name: name };
  }
}
