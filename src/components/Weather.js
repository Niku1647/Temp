import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const weatherApi = {
  key: "ecae0dec56487af50571e624d0a04dad",
  baseUrl: "https://api.openweathermap.org/data/2.5/forecast",
};

function Weather(cityname) {
  const [details, setDetails] = useState(null);
  const [city, setCity] = useState();
  const [isLoaded,setIsLoaded]= useState(false)
  
  let login= true
  localStorage.setItem("login", JSON.stringify(login));
  const handleLogout = ()=>{
     login= false
  localStorage.setItem("login", JSON.stringify(login));

  }

  useEffect(() => {
    fetch(
      `https://geolocation-db.com/json/85249190-4601-11eb-9067-21b51bc8dee3`
    )
      .then((data) => data.json())
      .then((data) => {
        setCity(data.city);
      });
  });

  useEffect(() => {
    async function fetchdata() {
      const result = await axios.get(
        `${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}`
      );
      setDetails(result.data.list[0].main);
      setIsLoaded(true)
    }
    fetchdata();
  });
  if(isLoaded){
    return (
      <div className=" mt-36 flex items-center justify-center flex-col border-double border-4 border-indigo-500">
        
        <h1 className="text-5xl  fredericka text-blue-500 font-black  tracking-wider text-center m-6 ">{city}</h1>
  
  <div className="flex justify-evenly mt-10 text-white font-bold text-xl  ">
    <h1 className="bg-blue-400 px-6 py-2 poppins mx-6 rounded-full">
      Temp Max={Math.round(details.temp_max - 273.15)}
      {"\u00B0"}C
    </h1>
    <h1 className="bg-blue-400 px-6 py-2 mx-6 poppins rounded-full">
      Temp Min={Math.round(details.temp_min - 273.15)}
      {"\u00B0"}C
    </h1>
  </div>

  <button onClick={handleLogout} className=" my-20 px-5 ring-4 ring-yellow-500 ring-opacity-50 bg-yellow-300 hover:bg-yellow-600">
    <Link to="/" >Logout</Link>
  </button>
       
      </div>
    );

  }else{
    return(
      <div className="App"><h1>Loading...</h1></div>
    )
  }

  
}

export default Weather;
