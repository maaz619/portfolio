import React from "react"
import styled from "styled-components"
import { Avatar } from "@material-ui/core"
import myimage from "../images/image.jpg"

const CustomContainer = styled.div``

const DrawerNav = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 20px;
`

const CustomDrawer = () => {
  const navigation = ["Home", "projects", "Skills", "Education", "Contact"]
  return (
    <div style={{ height: "100%" }}>
      <CustomContainer>
        <Avatar
          alt="Maaz Ahmed"
          src={myimage}
          style={{ height: "200px", width: "200px" }}
        />
      </CustomContainer>
      <DrawerNav>
        {navigation.map((nav, i) => (
          <h1 key={i} style={{ padding: "10px", paddingTop: "20px" }}>
            {nav}
          </h1>
        ))}
      </DrawerNav>
    </div>
  )
}

export default CustomDrawer
