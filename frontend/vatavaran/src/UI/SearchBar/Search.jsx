import React, { useState } from "react";
import { toast } from "react-toastify";
import fromZIP from "../../Actions/Location/fromZIP";
import fromCity from "../../Actions/Location/fromCity";
import getWeatherData from "../../Actions/Weather/getWeatherData";
export default function Search({ setWeatherData, setLoading }) {
  const [searchValue, setSearchValue] = useState("");
  async function onSearchClick() {
    setLoading(false);
    if (!isNaN(searchValue)) {
      const tempLoc = await fromZIP(searchValue);
      if (tempLoc.latitude === undefined) {
        toast.error("Error: Invalid Zipcode");
        setWeatherData({});
      } else {
        const wdata = await getWeatherData(tempLoc.latitude, tempLoc.longitude);
        setWeatherData(wdata);
      }
    } else if (/^[a-zA-Z]+$/.test(searchValue)) {
      let city = searchValue.toLowerCase();
      const tempLoc = await fromCity(city);
      if (tempLoc.latitude === undefined) {
        toast.error("Error: Invalid City");
        setWeatherData({});
      } else {
        const wdata = await getWeatherData(tempLoc.latitude, tempLoc.longitude);
        setWeatherData(wdata);
      }
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
        placeholder="City/Zip"
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
