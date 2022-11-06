import { v4 as uuidv4 } from "uuid"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



import './index.css'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const btnGroup1 = [{ id: uuidv4(), displayText: 'Dates' }, { id: uuidv4(), displayText: 'Group size' }, { id: uuidv4(), displayText: 'More filters' }]

const btnGroup2 = [{ id: uuidv4(), displayText: 'Great for groups' }, { id: uuidv4(), displayText: 'Family-friendly' }, { id: uuidv4(), displayText: 'Animals' },
    { id: uuidv4(), displayText: 'Arts & writing' }, { id: uuidv4(), displayText: 'Baking' }, { id: uuidv4(), displayText: 'Cooking' },
    { id: uuidv4(), displayText: 'Dance' }, { id: uuidv4(), displayText: 'Drinks' }, { id: uuidv4(), displayText: 'Entertainment' },
    { id: uuidv4(), displayText: 'Fitness' }, { id: uuidv4(), displayText: 'History & culture' }, { id: uuidv4(), displayText: 'Magic' },
    { id: uuidv4(), displayText: 'Music' }, { id: uuidv4(), displayText: 'Social impact' }, { id: uuidv4(), displayText: 'Wellness' },
    { id: uuidv4(), displayText: 'Olympians & Paralympians' }, { id: uuidv4(), displayText: 'Designed for accessibility' }]


const FilterCards = () => (
  <div className="ulmcont">
    <ul className="ulg1">
      {btnGroup1.map((each) => (
        <li className="litem" key={each.id}>
          <button className="btng1" type="button">
            {each.displayText}
          </button>
        </li>
      ))}
    </ul>
    <Carousel className="muc" responsive={responsive}>
      {btnGroup2.map((each) => (
        <li className="litem2" key={each.id}>
          <button className="btng1 btng2" type="button">
            {each.displayText}
          </button>
        </li>
      ))}
    </Carousel>
  </div>
);

export default FilterCards