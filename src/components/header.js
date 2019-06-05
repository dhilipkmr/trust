import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./styles.css"
import {MdMenu, MdClose} from "react-icons/md";
import logo from '../images/Vrr.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }
  showNavContent = (e) => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const {isOpen = false} = this.state;
    return (
      <header className="header">
        <div className="d-l-inbl pad10 posFixed d-l-hide" onClick={this.showNavContent}>
          {isOpen ? <MdClose className="fs-25"/> : <MdMenu className="fs-25"/>}
        </div>
        <div className="d-md-block d-l-inbl txt-md-center logoPad">
          <img height="50" width="60" src={logo} />
        </div>
        <ul ref="sideNav" className={'headerItems color-grey fs-15 d-flex fl-l-right d-md-block animateD5 pos-md-fixed ' + (isOpen ? ' sideBar ' : 'pos-md-left-n100')}>
          <li className="padTB20LR15 activeHeader curPoint"><a href="/">Home</a></li>
          <li className="padTB20LR15 curPoint"><a href="#events">Events</a></li>
          <li className="padTB20LR15 curPoint"><a href="#gallery">Gallery</a></li>
          <li className="padTB20LR15 curPoint"><a href="#joinus">Join Us</a></li>
          <li className="padTB20LR15 curPoint"><a href="#about">About</a></li>
          <li className="padTB20LR15 curPoint"><a href="#contact">Contact</a></li>
          <li className="padTB20LR15 curPoint"><a href="#donate">Donate</a></li>
        </ul>
      </header>
    ); 
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
