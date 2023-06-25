import React, {useState, useEffect} from 'react'
import WeatherInfo from './WeatherInfo'
import { toast } from 'react-toastify';
export default function HomePage(props) {
    const [showGreetings, setShowGreetings] = useState(true);
    const [coords, setCoords] = useState({latitude:-1, longitude:-1});
    useEffect(() => {
        toast.success("Welcome to Vatavaran Weather");
        function CheckLocationAvailability(){
            if(props.isGeolocationAvailable){
                if(props.isGeolocationEnabled){
                    if(props.coords){
                        let tempCoords = {latitude: props.coords.latitude, longitude:props.coords.longitude}
                        setCoords(tempCoords);
                    }
                    else{
                        toast.error("No Co-ordinates Available, Please Enter Manuelly")
                    }
                }
                else{
                    toast.error("Location Access is not Enabled")
                }
            }
            else{
                toast.error("No Location Service is Available");
            }
        }
    CheckLocationAvailability();
    }, []);
  return (
    <>
     {/* {showGreetings && <WeatherInfo/>} */}
    <div>
        <h1>
            Vatavaran Weather app
        </h1>
        </div>
    </>
  )
}
