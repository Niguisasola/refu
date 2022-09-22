import React from 'react'

function GetLocation() {
  const [currentUbication, setCurrentUbication] = useState({ lat: 37.4224764, lng: -122.0842499 });

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    let ubication = {}

    function setUbication() {
        navigator.geolocation.getCurrentPosition(success, error, options);
        setCurrentUbication(ubication)
        console.log('hola')
    }

    function success(pos) {
        const crd = pos.coords;
        ubication.lat = crd.latitude
        ubication.lng = crd.longitude
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error, options);
        // if (success) {            
        //}
        console.log(ubication)
        setCurrentUbication(ubication)
    }, []);
  return (
    <div><button>Get current location</button></div>
  )
}

export default GetLocation