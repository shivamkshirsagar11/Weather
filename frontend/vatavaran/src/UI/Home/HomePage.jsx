import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import LoadingResolve from '../Loading/LoadingResolve';
export default function HomePage() {
    const [coords, setCoords] = useState({latitude:-1, longitude:-1});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        toast.success("Welcome to Vatavaran Weather");
        function getLocation(){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(onSuccess, onError);
              } else {
                toast.error("Location Not Supported");
              }
        }
        function onSuccess(pos){
            let tempLoc = {latitude:pos.coords.latitude,longitude:pos.coords.longitude};
            setCoords(tempLoc);
            setLoading(false);
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
                    setCoords({latitude:lat,longitude:lon});
                } catch (error) {
                  toast.error('Error fetching IP address');
                  toast.error("Please Enter Location Manually, Error getting Location");
                }
                setLoading(false);
              };
              await fetchIPAddressAndLoc();
        }
        getLocation();
    }, []);
  return (
    <>
    {loading && <LoadingResolve/>}
    {!loading &&<>
     latitude: {coords.latitude}<hr/>
     longitude: {coords.longitude}<hr/>
     </>
    }
    <div>
        <h1>
            Vatavaran Weather app
        </h1>
        </div>
    </>
  )
}
