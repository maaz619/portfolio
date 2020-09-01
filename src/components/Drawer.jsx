import React from "react"
import { Drawer } from "@material-ui/core"
import styled from "styled-components"
import CustomDrawer from "../components/CustomDrawer"

const MainDiv = styled.div`
  width: 300px;
`
const Profile = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: purple;
`
const drawerStyle = {
  top: "0",
  height: "100vh",
  zIndex: "1200",
  position: "sticky",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}
const HeaderDrawer = props => {
  const h1style = {
    padding: "15px",
    textalign: "center",
    display: "flex",
    alignItems: "center",
  }
  return (
    <Drawer variant="temporary" anchor="left" open={props.isOpen}>
      <MainDiv>
        {/* <Profile>Avatar</Profile>
        <h2 style={h1style}>
          <Home style={{ paddingRight: "5px" }} />
          Home
        </h2>
        <h2 style={h1style}>
          <GitHub style={{ paddingRight: "5px" }} />
          GitHub
        </h2>
        <h1 style={h1style}>Projects</h1>
        <h1 style={h1style}>Education</h1>
        <h1 style={h1style}>List</h1>
        <h1 style={h1style}>List</h1> */}
        <div style={drawerStyle}>
          <div style={{ padding: "20px" }}>
            <CustomDrawer />
          </div>
        </div>
      </MainDiv>
    </Drawer>
  )
}
export default HeaderDrawer
