import React,{useState} from 'react'
import {toast} from 'react-toastify';
import fromZIP from '../../Actions/Location/fromZIP';
import fromCity from '../../Actions/Location/fromCity';
export default function Search({setKnown, setCoords}) {
    const [searchValue, setSearchValue] = useState('');
    async function onSearchClick(){
      if(!isNaN(searchValue)){
        //call pincode
        const tempLoc = await fromZIP(searchValue);
        if (tempLoc.latitude === undefined) {
          toast.error("Error: Invalid Zipcode");
          setKnown('Undefined')
        }
        else{
          setKnown(tempLoc.name);
          setCoords({latitude: tempLoc.latitude, longitude: tempLoc.longitude})
        }
        // toast.info(searchValue);
        // setSearchValue('');
      }
      else if(/^[a-zA-Z]+$/.test(searchValue)){
        // call city
        let city = searchValue.toLowerCase();
        const tempLoc = await fromCity(city);
        if (tempLoc.latitude === undefined) {
          toast.error("Error: Invalid City");
          setKnown('Undefined')
        }
        else{
          setKnown(tempLoc.name);
          setCoords({latitude: tempLoc.latitude, longitude: tempLoc.longitude})
        }
        // toast.info(city);
        // setSearchValue('');
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
