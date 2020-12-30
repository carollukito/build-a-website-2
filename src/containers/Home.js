import React, { useState, useEffect, useMemo } from "react";
//import axios from "axios";
//import {useHistory} from "react-router-dom";

import Header from "../components/Header";
import WeatherImage from "../components/WeatherImage";

import City from "../components/City";

const weatherKey = `TODO`; // Your API Key here

function Home() {
  // TODO
  return (
    // Container
    <div className="flex flex-col h-screen">
      <City cityName={"Tokyo"} temp={"10°C"} color={"bg-purple-500"} />

      <City cityName={"Jakarta"} temp={"24°C"} color={"bg-pink-500"} />

      <City cityName={"Bandung"} temp={"17°C"} color={"bg-blue-500"} />
    </div>
  );
}

export default Home;
