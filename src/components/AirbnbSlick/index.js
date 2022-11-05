import { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
}

class AirbnbSlick extends Component {
    constructor(props) {
        super(props)
        this.state = { tripsList: props.tripsData }
    }

    renderSlider = () => {
        const { tripsList } = this.state
        return (
            <Slider {...settings}>
                {tripsList.map(each => (
                    
                        <li className="slick-item" key={each.id}>
                        <div className='asc1'>
                            <img alt="top-sellers" src={each.imgUrl} className="ts-img" />
                            <div className='asc2'>
                                <AiFillStar className='star-icon' />
                                <p className='rc-para'>{each.rating} ({each.count}) . {each.city}</p>
                            </div>
                            <p className='desc'>{each.description}</p>
                            <p className='price-para'>From ₹{each.price}<span className='spel'>/person</span></p>

                            </div>
                        </li>
                    
                ))}
            </Slider>
        )
    }

    render() {
        return (
            <div className="slick-cont">
                <div className="slick-cont1">{this.renderSlider()}</div>
            </div>
        )
    }
}

export default AirbnbSlick