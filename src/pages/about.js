import React from "react"
import Header from "../components/Header"
import { Link } from "gatsby"

const About = () => {
  return (
    <div>
      <div style={{ height: "30px" }}></div>
      <Header />
      <h1>About Page</h1>
      <Link to="/">GO Back</Link>
    </div>
  )
}

export default About
