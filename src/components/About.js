import React from 'react';
import { GiHealthNormal, GiBookCover, GiFoodTruck } from "react-icons/gi";
import volunteer from '../images/volunteer.png';

const ABOUT_HEADING1 = 'What We Do?';
const ABOUT_HEADING_1_DESC = 'Here is all Reason to Work with us.'
const WHAT_WE_DO_LIST = [
  {
    icon: <GiFoodTruck className="fs-50"/>,
    name: 'Food Delivering',
    desc: 'Lorem ipsum dolor sit amet, te habemus ocurreret similique pri. Prompta scribentur ei mei, mel ea dicta clita eripuit.',
  },
  {
    icon: <GiHealthNormal className="fs-50"/>,
    name: 'Aids for Health',
    desc: 'Lorem ipsum dolor sit amet, te habemus ocurreret similique pri. Prompta scribentur ei mei, mel ea dicta clita eripuit.',
  },
  {
    icon: <GiBookCover className="fs-50"/>,
    name: 'Build Education',
    desc: 'Lorem ipsum dolor sit amet, te habemus ocurreret similique pri. Prompta scribentur ei mei, mel ea dicta clita eripuit.',
  }
];
const ABOUT_HEADING2 = 'Our Volunteers';
const ABOUT_HEADING_2_DESC = 'We Support them for their Smile.';
const VOLUNTEER_LIST = [
  {
    name: 'Kumar',
    role: 'President',
    image: ''
  },
  {
    name: 'Saravana Kumar',
    role: 'Vice President',
    image: ''
  },
  {
    name: 'Saravana Kumar',
    role: 'Chief Director',
    image: ''
  }
];

const About = () => (
  <div name="about">
    <div className="textCenter pad10 marginTB50">
      <div className="color-grey fb txtUpper fs-25">{ABOUT_HEADING1}</div>
      <div className="color-grey pad10 fs-15">{ABOUT_HEADING_1_DESC}</div>
    </div>
    <div className="eventsSection d-flex">
    {
      WHAT_WE_DO_LIST.map((item) => {
        return (
          <div className="card aboutCardDimension">
            <div className="pad10">
              <div className="textCenter margin10 themeColor">
                {item.icon}
              </div>
              <div className="fs-20 padRLB5 textCenter margin10 ">{item.name}</div>
              <div className="color-grey padB5 lh-25 margin10">{item.desc}</div>
            </div>
          </div>
        );
      })
    }
    </div>
    <div className="textCenter pad10 marginTB50">
      <div className="color-grey fb txtUpper fs-25">{ABOUT_HEADING2}</div>
      <div className="color-grey pad10 fs-15">{ABOUT_HEADING_2_DESC}</div>
    </div>
    <div className="eventsSection d-flex">
    {
      VOLUNTEER_LIST.map((item) => {
        return (
          <div className="card aboutCardDimension volunteer">
            <div>
              <img height="175" width="300" src={volunteer}/>
            </div>
            <div className="pad10">
              <div className="color-grey padB5 lh-25 themeColor">{item.role}</div>
              <div className="fs-15 txtUpper">{item.name}</div>
            </div>
          </div>
        );
      })
    }
    </div>
  </div>
);

export default About;