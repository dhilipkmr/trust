import React from 'react';
import { GoLinkExternal } from "react-icons/go";

const Footer = () => (
  <div className="posRel footer colorWhite lh-25 ">
    <div className="d-flex" style={{justifyContent: 'space-around'}}>
      <div className="margin50">
        <div className="fs-20 txtUnderline padB5">Address</div>
        <div>A5, Block2, Parijatha Apartment</div>
        <div>Green Glen Layout</div>
        <div>Bangalore 560103</div>
      </div>
      <div className="margin50">
        <div>
          <div className="d-inbl padR5">Become a Volunteer</div>
          <GoLinkExternal/>
        </div>
        <div>
          <div className="d-inbl padR5">Become a Donor</div>
          <GoLinkExternal/>
        </div>
        <div>Contact : +91-9776969429</div>
      </div>
    </div>
    <div className="textCenter pad10"> © All rights Reserved</div>
  </div>
);

export default Footer;