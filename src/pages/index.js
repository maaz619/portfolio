import React from "react"
import Header from "../components/Header"
import styled from "styled-components"
import Content from "../components/Content"
import { Helmet } from "react-helmet"
import CustomDrawer from "../components/CustomDrawer"
import HeaderDrawer from "../components/Drawer"
import { connect } from "react-redux"
import { setOpen } from "../store/action"
import { Menu } from "@material-ui/icons"
import window from "global"

const Mainapp = styled.div`
  height: 100vh;
`
const Home = styled.div`
  width: 100%;
  display: flex;
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

const IndexPage = ({ setOpen, isOpen }) => {
  const [currentWidth, setWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => setWidth(window.innerWidth))
    }
    if (typeof window !== "undefined") {
      return () => {
        window.removeEventListener("resize", () => setWidth(window.innerWidth))
      }
    }
  }, [currentWidth])

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  console.log(currentWidth)

  return (
    <Mainapp>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio</title>
        <link rel="icon"></link>
      </Helmet>
      <Home>
        {currentWidth > 700 ? (
          <div style={drawerStyle}>
            <div style={{ padding: "20px" }}>
              <CustomDrawer />
            </div>
          </div>
        ) : (
          <div onBlur={handleClose}>
            <HeaderDrawer isOpen={isOpen} />
          </div>
        )}
        <div style={currentWidth > 700 ? { width: "80%" } : { width: "100%" }}>
          <div style={{ height: "30px" }}></div>
          {currentWidth < 700 && (
            <Menu style={{ marginLeft: "15px" }} onClick={handleClick}></Menu>
          )}
          <Header />
          <Content />
          <Content />
        </div>
      </Home>
    </Mainapp>
  )
}
const mapStateToProps = (state, ownProps) => {
  const { isOpen } = state.header
  return {
    isOpen,
  }
}
export default connect(mapStateToProps, { setOpen })(IndexPage)
