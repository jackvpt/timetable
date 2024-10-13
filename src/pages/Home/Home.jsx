import { useState } from "react"
import FilterBar from "../../components/FilterBar/FilterBar.jsx"
import TimeScale from "../../components/TimeScale/TimeScale.jsx"
import Day from "../../components/Day/Day.jsx"
import "./Home.scss"

export default function Home() {
  const [filter, setFilter] = useState("AB")
  const handleFilterChange = (newfilter) => {
    setFilter(newfilter)
  }

  const daysOfWeek = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"]

  return (
    <>
      <FilterBar onFilterChange={handleFilterChange} />
      <div className="container__main">
        <TimeScale />
        <div className="container__timetables">
          {daysOfWeek.map((day, index) => (
            <Day key={index} day={day} filterWeek={filter}/>
          ))}
        </div>
      </div>
    </>
  )
}
