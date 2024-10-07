import React from "react"
import Course from "../Course/Course"
import TimeScale from "../TimeScale/TimeScale.jsx"
import "./Day.scss"
import { useFetch } from "../../utils/useFetch.jsx"

export default function Day({ day }) {
  // Fetch call returns 'data', 'isLoading' and 'error'
  const fetchResult = useFetch("/dataTimetable.json")
  const fetchResultTimeScale = useFetch("/dataTimeScale.json")

  // Get data from fetch
  const timetables = fetchResult.data
  const timeScales = fetchResultTimeScale.data

  if (fetchResult.isLoading || !fetchResult.data) return
  if (fetchResultTimeScale.isLoading || !fetchResultTimeScale.data) return

  const dayTimetables = timetables.filter((timetable) => timetable.day === day)

  return (
    <section>
      <h2>{day}</h2>
      <div className="container__day">
        <div className="container__day-weekAB">
          {timeScales.map(function (timeScale, index) {
            const start = timeScale.start
            const timeTable = dayTimetables
              .filter((timetable) => timetable.week === "A")
              .find((timetable) => timetable.start === start)

            return <Course key={index} props={timeTable} />
          })}
        </div>
        <div className="container__day-weekAB">
          {timeScales.map(function (timeScale, index) {
            const start = timeScale.start
            const timeTable = dayTimetables
              .filter((timetable) => timetable.week === "B")
              .find((timetable) => timetable.start === start)

            return <Course key={index} props={timeTable} />
          })}
        </div>
      </div>
    </section>
  )
}
