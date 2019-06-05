import React from 'react';
// import {EVENTS_HEADING, EVENTS_SUB_HEADING, EVENTS_LIST} from 'Constants.js';
// EVENTS SECTION
import image from '../images/child.png';

export const EVENTS_HEADING = 'Upcoming Events';
export const EVENTS_SUB_HEADING = 'Your Little Support could make a huge Difference!';
export const EVENTS_LIST = [
  {
    imgUrl: '',
    eventName: 'Event 1',
    eventDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    venue: 'Bellandur, banglore',
    date: '28-Jul-2019'
  },
  {
    imgUrl: '',
    eventName: 'Event 2',
    eventDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    venue: 'Sarjapur, banglore',
    date: '1-Aug-2019'
  },
  {
    imgUrl: '',
    eventName: 'Event 3',
    eventDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    venue: 'Marathahalli, banglore',
    date: '15-Aug-2019'
  }
];


const Events = () => (
  <div name="events">
  <div className="textCenter pad10 marginTB50">
    <div className="color-grey fb txtUpper fs-25 padTB10">{EVENTS_HEADING}</div>
    <div className="color-grey pad10 fs-15">{EVENTS_SUB_HEADING}</div>
  </div>
  <div className="eventsSection d-flex">
  {
    EVENTS_LIST.map((event) => {
      return (
        <div className="card eventsCardDimentsion">
          <div>
            <img height="175" width="300" src={image}/>
          </div>
          <div className="pad10">
            <div className="fs-20 padRLB5 textCenter">{event.eventName}</div>
            <div className="color-grey padB5 lh-25">{event.eventDesc}</div>
            <div className="color-grey d-flex justifyBetween pad10">
              <span className="txtUpper fs-12">{event.venue}</span>
              <span className="txtUpper fs-12">{event.date}</span>
            </div>
            <div className="textCenter padTB10">
              <div className="donateBtn curPoint">Donate Now</div>
            </div>
          </div>
        </div>
      );
    })
  }
  </div>
  </div>
);

export default Events;