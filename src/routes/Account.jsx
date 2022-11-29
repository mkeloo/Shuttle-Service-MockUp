import React, { useMemo } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const Account = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return 'Loading...';
  return (
    <div className="bg-orange-600">
      <h1 className="text-4xl flex items-center justify-center p-5 text-white">
        Login Portal
      </h1>
      <div className="relative">
        <Map />
      </div>
    </div>
  );
};

export default Account;

function Map() {
  const center = useMemo(() => ({ lat: 29.64551, lng: -82.348602 }), []);
  return (
    <div className="absolute z-0">
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={{ lat: 29.64551, lng: -82.348602 }} />
        <Marker position={{ lat: 29.636339, lng: -82.357147 }} />
        <div className="absolute z-10 w-[350px] h-[350px] bg-blue-500 opacity-80 m-6 rounded-2xl shadow-xl">
          <h1 className="text-2xl font-bold flex items-center justify-center p-5 text-white mt-4">
            Shuttle Routes
          </h1>
          {/* design a form with a list of routes */}
          <form className="flex flex-col items-center justify-center">
            <div className="my-4 w-full relative rounded-2xl shadow-xl">
              <label className="text-white ml-4">From:</label>
              <input
                className="w-[60%] p-2 border-input rounded-2xl ml-5 bg-pink-100"
                placeholder="Reitz Union"
              />
            </div>
            <div className="my-4 w-full relative rounded-2xl shadow-xl">
              <label className="text-white ml-9">To:</label>
              <input
                className="w-[60%] p-2 border-input rounded-2xl ml-5 bg-pink-100"
                placeholder="Routes 1"
              />
            </div>
            <button className="w-[50%] my-2 p-3 rounded-2xl shadow-xl bg-orange-600 text-white font-bold hover:scale-105 duration-300">
              Show
            </button>
          </form>
        </div>
      </GoogleMap>
    </div>
  );
}
