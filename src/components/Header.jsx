import React from "react"
import "./Header.css"
import { Link } from "gatsby"
import styled from "styled-components"
import MenuIcon from "@material-ui/icons/Menu"
import { connect } from "react-redux"
import { setOpen } from "../store/action"

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`

const Headerlink = styled(Link)`
  text-decoration: none;
  padding: 15px;
`

const Header = () => {
  const menu = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "85%",
  }
  // const handleClick = () => {
  //   setOpen(true)
  // }
  // const handleClose = () => {
  //   setOpen(false)
  // }
  return (
    <HeaderContainer>
      <div style={menu}>
        <Headerlink to="/">
          <span style={{ color: "black", fontWeight: "800", fontSize: "22px" }}>
            Portfolio
          </span>
        </Headerlink>
        <Headerlink to="/about">
          <span style={{ color: "grey" }}>Contact</span>
        </Headerlink>
      </div>
    </HeaderContainer>
  )
}
const mapStateToProps = (state, ownProps) => {
  const { isOpen } = state.header
  return {
    isOpen,
  }
}
const mapDispatchToProps = { setOpen }
export default connect(mapStateToProps, mapDispatchToProps)(Header)
