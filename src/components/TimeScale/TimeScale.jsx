import React from "react"
import "./TimeScale.scss"
import { useFetch } from "../../utils/useFetch.jsx"

export default function TimeScale() {
  // Fetch call returns 'data', 'isLoading' and 'error'
  const fetchResult = useFetch("dataTimeScales.json")

  // Get data from fetch
  const timeScales = fetchResult.data

  if (fetchResult.isLoading || !fetchResult.data) return

  return (
    <div className="container__main-timescales">
      {[...Array(5)].map((e, index) => (
        <div key={index} className={`container__timeScale timeScale${index}`}>
          {timeScales.map((timeScale, index) => (
            <div className="container__timeScale_hour" key={index}>
              <p>{timeScale.start}</p>
              <p>{timeScale.end}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
