import React from "react"
import "./Course.scss"

export default function Course({ props }) {
  return (
    <article
      className={
        props ? "" : "container__course--inactive"
      }
    >
      {props && (
        <div className="container__course">
          <h3>{props.subject}</h3>
          <h4>{props.subtitle}</h4>
          <p className="classId">{props.classId}</p>
          <div className="container__room-week">
            <p className="room">SALLE {props.room}</p>
            <div className="week">{props.week}</div>
          </div>
        </div>
      )}
    </article>
  )
}
