import "./FilterBar.scss"
import { useState } from "react"
import { getWeekNumber, getWeekName } from "../../utils/weekNumber"

const FilterBar = ({ onFilterChange }) => {
  const currentWeekNumber = getWeekNumber(new Date())
  const currentWeekName = getWeekName(currentWeekNumber)
  const nextWeekNumber = currentWeekNumber < 52 ? currentWeekNumber + 1 : 1
  const nextWeekName = getWeekName(nextWeekNumber)

  const [selectedWeek, setSelectedWeek] = useState("AB")
  const [selectedWeekText, setSelectedWeekText] = useState("AB")

  const handleClick = (e) => {
    const divId = e.target.id
    let newSelectedWeek = "AB"
    switch (divId) {
      case "current":
        setSelectedWeekText("current")
        newSelectedWeek = getWeekName(currentWeekNumber)
        break
      case "next":
        setSelectedWeekText("next")
        newSelectedWeek = getWeekName(nextWeekNumber)
        break
      default:
        setSelectedWeekText(divId)
        newSelectedWeek = divId
        break
    }

    setSelectedWeek(newSelectedWeek)
    onFilterChange(newSelectedWeek)
  }

  return (
    <div className="container__filterBar">
      <div className="container__filterBar-subBar">
        <div
          className={`container__filterBar-filterElement${
            selectedWeekText === "AB" ? " active" : ""
          }`}
          id="AB"
          onClick={handleClick}
        >
          Tous
        </div>
        <div
          className={`container__filterBar-filterElement${
            selectedWeekText === "A" ? " active" : ""
          }`}
          id="A"
          onClick={handleClick}
        >
          Semaine A
        </div>
        <div
          className={`container__filterBar-filterElement${
            selectedWeekText === "B" ? " active" : ""
          }`}
          id="B"
          onClick={handleClick}
        >
          Semaine B
        </div>
      </div>
      <div className="container__filterBar-subBar">
        <div
          className={`container__filterBar-filterElement${
            selectedWeekText === "current" ? " active" : ""
          }`}
          id="current"
          onClick={handleClick}
        >
          Semaine en cours (S{currentWeekNumber}-{currentWeekName})
        </div>
        <div
          className={`container__filterBar-filterElement${
            selectedWeekText === "next" ? " active" : ""
          }`}
          id="next"
          onClick={handleClick}
        >
          Semaine prochaine (S{nextWeekNumber}-{nextWeekName})
        </div>
      </div>
    </div>
  )
}

export default FilterBar
