import React, { Component } from 'react'
import '../Header.css'
import logo from '../logo.svg'

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="react-logo">
                    <img src={logo} alt="logo" width="100" height="100"/>
                </div>
                <div className="header-title">
                    <div>
                        <span>EVENT COUNTDOWN </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
