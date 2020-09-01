import React from "react"
import Header from "../components/Header"
import { Link } from "gatsby"
import CustomDrawer from "../components/CustomDrawer"
const About = () => {
  return (
    <div>
      <div style={{ height: "30px" }}></div>
      <Header />
      <CustomDrawer />
      <h1>About Page</h1>
      <Link to="/">GO Back</Link>
    </div>
  )
}

export default About
