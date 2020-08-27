import React from "react"
import Header from "../components/Header"
import styled from "styled-components"
import Content from "../components/Content"
import { Helmet } from "react-helmet"

const Mainapp = styled.div`
  height: 100vh;
`

const IndexPage = () => {
  return (
    <Mainapp>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio</title>
        <link rel="icon"></link>
      </Helmet>
      <div style={{ height: "30px" }}></div>
      <Header />
      <Content></Content>
    </Mainapp>
  )
}
export default IndexPage
