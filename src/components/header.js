import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./styles.css"
import {MdMenu, MdClose} from "react-icons/md";

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
      <header>
        <div className="d-l-inbl pad10 posFixed d-l-hide" onClick={this.showNavContent}>
          {isOpen ? <MdClose/> : <MdMenu/>}
        </div>
        <div className="d-md-block d-l-inbl txt-md-center pad10">Logo</div>
        <ul ref="sideNav" className={'d-flex fl-l-right d-md-block animateD5 pos-md-fixed ' + (isOpen ? '' : 'pos-md-left-n100')}>
          <li className="pad10"><a href="/">Home</a></li>
          <li className="pad10"><a href="#events">Events</a></li>
          <li className="pad10"><a href="#gallery">Gallery</a></li>
          <li className="pad10"><a href="#joinus">Join Us</a></li>
          <li className="pad10"><a href="#about">About</a></li>
          <li className="pad10"><a href="#contact">Contact</a></li>
          <li className="pad10"><a href="#donate">Donate</a></li>
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
