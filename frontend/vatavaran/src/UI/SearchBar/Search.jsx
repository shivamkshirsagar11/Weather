import React,{useState} from 'react'
import {toast} from 'react-toastify';
import fromZIP from '../../Actions/Location/fromZIP';
import fromCity from '../../Actions/Location/fromCity';
import getWeatherData from '../../Actions/Weather/getWeatherData';
export default function Search({setKnown, setWeatherData}) {
    const [searchValue, setSearchValue] = useState('');
    async function onSearchClick(){
      if(!isNaN(searchValue)){
        const tempLoc = await fromZIP(searchValue);
        if (tempLoc.latitude === undefined) {
          toast.error("Error: Invalid Zipcode");
          setKnown('Undefined')
        }
        else{
          const wdata = await getWeatherData(tempLoc.latitude, tempLoc.longitude);
          setKnown(tempLoc.name);
          setWeatherData(wdata);
        }
      }
      else if(/^[a-zA-Z]+$/.test(searchValue)){
        let city = searchValue.toLowerCase();
        const tempLoc = await fromCity(city);
        if (tempLoc.latitude === undefined) {
          toast.error("Error: Invalid City");
          setKnown('Undefined')
        }
        else{
          const wdata = await getWeatherData(tempLoc.latitude, tempLoc.longitude);
          setWeatherData(wdata);
          setKnown(tempLoc.name);
        }
      }
      else{
        toast.error("Please enter a valid search value");
        setSearchValue('');
      }
    }
  return (
    <div>
      <div className="input-group">
  <input type="search" className="form-control rounded" placeholder="Search City/Zipcode" aria-label="Search" aria-describedby="search-addon" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
  <button type="button" className="btn btn-outline-primary" onClick={onSearchClick}>search</button>
</div>
    </div>
  )
}
