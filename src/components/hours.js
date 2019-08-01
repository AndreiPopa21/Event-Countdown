import React, { Component } from 'react'
import '../Counter.css'

class Hours extends Component {
    render() {

        const hours = this.props.hours < 10? "0" + this.props.hours: this.props.hours

        return (
            <div className="hours-container">
                <p className="counter-digits">: {hours}</p>
                <pre className="counter-description">  Hours</pre>
            </div>
        )
    }
}

export default Hours
