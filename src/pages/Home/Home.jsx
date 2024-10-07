import React from "react"
import TimeScale from "../../components/TimeScale/TimeScale.jsx"
import Day from "../../components/Day/Day.jsx"
import "./Home.scss"

export default function Home() {
  const daysOfWeek = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"]

  return (
    <React.Fragment>
      <main className="container__main">
        <TimeScale />
        <div className="container__timetables">
          {daysOfWeek.map((day, index) => (
            <Day key={index} day={day} />
          ))}
        </div>
      </main>
    </React.Fragment>
  )
}
