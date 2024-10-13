import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../Header/Header"
import Home from "../../pages/Home/Home"
import Error from "../../pages/Error/Error"
import Footer from "../Footer/Footer"

export default function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter basename="/timetable">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  )
}
