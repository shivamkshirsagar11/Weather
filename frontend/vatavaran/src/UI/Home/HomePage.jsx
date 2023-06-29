import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import LoadingResolve from '../Loading/LoadingResolve';
import CurrentWeatherCard from '../WeatherInfo/CurrentWeatherCard';
import Navbar from '../Navbar/Navbar';
import getWeatherData from '../../Actions/Weather/getWeatherData';
import bg_gif from '../../icons/weather.gif'
export default function HomePage() {
    const [loading, setLoading] = useState(true);
    const [weatherData, setWeatherData] = useState({});
    useEffect(() => {
        toast.success("Welcome to Vatavaran Weather");
        function getLocation(){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(onSuccess, onError);
              } else {
                toast.error("Location Not Supported");
              }
              setLoading(false);
        }
        async function onSuccess(pos){
            const currentCityData = await getWeatherData(pos.coords.latitude, pos.coords.longitude);
            setWeatherData(currentCityData);
        }
        function onError(){
            toast.error("Error Getting location from GPS");
            toast.info("Getting location from IP");
            fromIP();
        }
        async function fromIP(){
            const fetchIPAddressAndLoc = async () => {
                try {
                  const response1 = await axios.get('https://api.ipify.org?format=json');
                  const { ip } = response1.data;
                  const response = await axios.get(`http://ip-api.com/json/${ip}`);
                    const { lat, lon } = response.data;
                    const currentCityData = await getWeatherData(lat, lon);
                    setWeatherData(currentCityData);
                } catch (error) {
                  toast.error('Error fetching IP address');
                  toast.error("Please Enter Location Manually, Error getting Location");
                }
              };
              await fetchIPAddressAndLoc();
        }
        getLocation();
    }, []);
  return (
    // <div style={{
    //   backgroundImage: "url(" + bg_gif + ")",
    //   backgroundSize: "cover",
    //   height: "100vh",
    // }}>
    <div>
  <Navbar setWeatherData={setWeatherData}/>
    {loading && <LoadingResolve/>}
    {!loading && Object.keys(weatherData).length !== 0 &&<CurrentWeatherCard weatherData={weatherData}/>}
    </div>
  )
}
