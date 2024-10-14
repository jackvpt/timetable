import React from "react"
import Course from "../Course/Course"
import TimeScale from "../TimeScale/TimeScale.jsx"
import "./Day.scss"
import { useFetch } from "../../utils/useFetch.jsx"

export default function Day({ day, filterWeek }) {
  // Fetch call returns 'data', 'isLoading' and 'error'
  // const fetchResultTimeScale = useFetch("dataTimeScale.json")

  const fetchResultTimeTable = useFetch("dataTimetable.json")
  const fetchResultTimeScales = useFetch("dataTimeScales.json")


  if (fetchResultTimeTable.isLoading || !fetchResultTimeTable.data) return
  if (fetchResultTimeScales.isLoading || !fetchResultTimeScales.data) return

  // Get data from fetch
  const timeTables = fetchResultTimeTable.data
  const timeScales = fetchResultTimeScales.data

  const dayTimetables = timeTables.filter((timeTable) => timeTable.day === day)

  const class_dayWidth = (filterWeek.length === 2) ? "container__day-AandB" : "container__day-AorB"

  return (
    <section>
      <h2>{day}</h2>
      <div className="container__day">
        {filterWeek.includes("A") && (
          <div className={class_dayWidth}>
            {timeScales.map(function (timeScale, index) {
              const start = timeScale.start
              const timeTable = dayTimetables
                .filter((timetable) => timetable.week === "A")
                .find((timetable) => timetable.start === start)

              return <Course key={index} props={timeTable} />
            })}
          </div>
        )}
        {filterWeek.includes("B") && (
          <div className={class_dayWidth}>
            {timeScales.map(function (timeScale, index) {
              const start = timeScale.start
              const timeTable = dayTimetables
                .filter((timetable) => timetable.week === "B")
                .find((timetable) => timetable.start === start)

              return <Course key={index} props={timeTable} />
            })}
          </div>
        )}
      </div>
    </section>
  )
}
