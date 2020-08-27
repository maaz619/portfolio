import React from "react"
import { Drawer } from "@material-ui/core"
import styled from "styled-components"
import { Home, GitHub } from "@material-ui/icons"

const MainDiv = styled.div`
  width: 350px;
`
const Profile = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: purple;
`

const HeaderDrawer = props => {
  const h1style = {
    padding: "15px",
    textalign: "center",
    display: "flex",
    alignItems: "center",
  }
  return (
    <Drawer variant="persistent" anchor="left" open={props.onopen}>
      <MainDiv>
        <Profile>Avatar</Profile>
        <button onClick={props.onclose}>Fold</button>
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
        <h1 style={h1style}>List</h1>
      </MainDiv>
    </Drawer>
  )
}
export default HeaderDrawer
