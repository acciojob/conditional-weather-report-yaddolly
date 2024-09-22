

import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";


const def = {temperature : 0, conditions : "Cool"}

const App = () => {

  const[data, setData] = useState(def)


  useEffect(() => {
    setTimeout(() => {
      setData({ temperature: 25, conditions: "Sunny" })
    }, 1000)
  })

  return (
    <div>
      <WeatherDisplay data={data} />
    </div>
  )
}

export default App
