import { Component } from 'react'
import {BiGlobe} from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdContact } from 'react-icons/io'
import './index.css'

const menuItems = [{id:1, text: 'Sign up' }, { id:2,text: 'Log in' }, {id:3, text:'Host your home'}, {id:4,text: 'Host an experience'}, { id:5,text:'Help'}]

class NavBar extends Component {
    state = { isClicked: false }

    clickHam = () => {
        this.setState(prevState=>({isClicked: !prevState.isClicked}))
    }

    renderMenu = () => {
        const { isClicked } = this.state
        return isClicked ? (
            <ul className='menu'>
                {menuItems.map(each => (
                    <li key={each.id} className="litem">{each.text}</li>
                ))}
                
        </ul>
        ) : null
    }

    render() {
        
        
        return (
            <div className='main-cont'>
            <nav className="unav">
        <div className="cont-1">
            <img src="https://res.cloudinary.com/djdbb0sfe/image/upload/v1667677813/airbnblogo_jmtsnv.jpg" alt="logo" className="logo"/>
            <h1 className="brand">airbnb</h1>
        </div>
        <div className="cont-1">
            <button className="btn1" type="button">Become a Host</button>
            <button className="btn1" type="button"><BiGlobe className='globe-icon'/></button>
                    <button className="btn2" type="button" onClick={this.clickHam}>
                        <div className='bcont'>
                            <GiHamburgerMenu />
                            <IoMdContact className='con-icon'/>
                        </div>
                    </button>
        </div>
                </nav>
                {this.renderMenu()}
                </div>
        )
    }
}

export default NavBar