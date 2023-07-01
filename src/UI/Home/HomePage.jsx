import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "../Loading/Spinner";
import CurrentWeatherCard from "../WeatherInfo/CurrentWeatherCard";
import Navbar from "../Navbar/Navbar";
import getWeatherData from "../../Actions/Weather/getWeatherData";
import DailyWeatherCard from "../WeatherInfo/DailyWeatherCard";
// import bg_gif from '../../icons/weather.gif'
export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  const [btnText, setBtnText] = useState("7 Day Weather");
  const [isDaily, setIsDaily] = useState(false);
  useEffect(() => {
    toast.success("Welcome to Vatavaran Weather", {
      position: toast.POSITION.TOP_CENTER,
    });
    toast.warning(
      "Getting Location may take a few seconds, You can search manually",
      {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        style: {
          width: "500px",
          color: "darkred",
        },
      }
    );
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
      } else {
        toast.error("Location Not Supported");
        setLoading(false);
      }
    }
    async function onSuccess(pos) {
      const currentCityData = await getWeatherData(
        pos.coords.latitude,
        pos.coords.longitude
      );
      setWeatherData(currentCityData);
      setLoading(false);
    }
    function onError() {
      toast.error("Error Getting location from GPS");
      toast.info("Getting location from IP");
      fromIP();
    }
    async function fromIP() {
      const fetchIPAddressAndLoc = async () => {
        try {
          const response1 = await axios.get(
            "https://api.ipify.org?format=json"
          );
          const { ip } = response1.data;
          const response = await axios.get(`http://ip-api.com/json/${ip}`);
          const { lat, lon } = response.data;
          const currentCityData = await getWeatherData(lat, lon);
          setWeatherData(currentCityData);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          toast.error("Error fetching IP address");
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
      <Navbar
        setWeatherData={setWeatherData}
        setLoading={setLoading}
        btnText={btnText}
        setIsDaily={setIsDaily}
        setBtnText={setBtnText}
        isDaily={isDaily}
      />
      {loading && <Spinner />}
      {!loading && Object.keys(weatherData).length !== 0 && !isDaily && (
        <CurrentWeatherCard weatherData={weatherData} />
      )}
      {isDaily &&  Object.keys(weatherData).length !== 0 &&  Object.keys(weatherData).length !== 0 && <DailyWeatherCard weatherData={weatherData} />}
    </div>
  );
}
