import React from "react"
import Header from "../components/Header"
import styled from "styled-components"
import Content from "../components/Content"

const Mainapp = styled.div`
  height: 100vh;
`

const IndexPage = () => {
  return (
    <Mainapp>
      <div style={{ height: "30px" }}></div>
      <Header />
      <Content></Content>
    </Mainapp>
  )
}
export default IndexPage
