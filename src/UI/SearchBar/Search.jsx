import React, { useState } from "react";
import { toast } from "react-toastify";
import fromZIP from "../../Actions/Location/fromZIP";
import fromCity from "../../Actions/Location/fromCity";
import getWeatherData from "../../Actions/Weather/getWeatherData";

// This function is used for Searching the weather of provided location/pincode
// Props:
// - setWeatherData: Function passed from parent to child for setting the weather data
// - setLoading: Function passed from parent to child for Enable/Disable of Spinner component
export default function Search({ setWeatherData, setLoading }) {
  const [searchValue, setSearchValue] = useState("");
  // This function is used when clicked on the search button or pressing enter on search box
  // Props: ---
  async function onSearchClick() {
    // setting loading false when searched
    setLoading(false);
    // checking if value is zipcode
    if (!isNaN(searchValue)) {
      // calling zipcode function to get data of city
      const tempLoc = await fromZIP(searchValue);
      if (tempLoc.latitude === undefined) {
        toast.error("Error: Invalid Zipcode");
        setWeatherData({});
      } else {
        const wdata = await getWeatherData(tempLoc.latitude, tempLoc.longitude);
        setWeatherData(wdata);
      }
      // checking if value is city
    } else if (/^[a-zA-Z]+$/.test(searchValue)) {
      // calling city function to get data of city
      let city = searchValue.toLowerCase();
      const tempLoc = await fromCity(city);
      if (tempLoc.latitude === undefined) {
        toast.error("Error: Invalid City");
        setWeatherData({});
      } else {
        const wdata = await getWeatherData(tempLoc.latitude, tempLoc.longitude);
        setWeatherData(wdata);
      }
      // if no match is there then raise error
    } else {
      toast.error("Please enter a valid search value");
      setSearchValue("");
    }
  }
  return (
    <div className="container input-group">
      <input
        type="text"
        className="form-control"
        placeholder="City/Zip wihtout space"
        title="no spaces at start/middle/end."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearchClick();
          }
        }}
      />
      <span
        className="input-group-text"
        onClick={onSearchClick}
        style={{ cursor: "pointer" }}
      >
        🔍
      </span>
    </div>
  );
}
