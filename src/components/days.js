import React, { Component } from 'react'
import '../Counter.css'

class Days extends Component {

    render() {

        const days = this.props.days < 10? "0" + this.props.days: this.props.days

        return (
            <div className="days-container">
                <p className="counter-digits">{this.props.days}</p>
                <pre className="counter-description">Days</pre>
            </div>
        )
    }
}
export default Days
