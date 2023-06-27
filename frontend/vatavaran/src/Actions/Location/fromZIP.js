export default async function fromZIP(zipcode){
    const res = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},IN&appid=dadb14165ec6b2765b2c3c182339bb39`);
    const data = await res.json();
    // console.log(data)
    const {lat, lon, name} = data;
    return {latitude: lat, longitude: lon, name: name};
}