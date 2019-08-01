import React, { Component } from 'react'
import '../Counter.css'

class Minutes extends Component {
    render() {
        const mins = this.props.minutes < 10? "0" + this.props.minutes: this.props.minutes

        return (
            <div className="minutes-container">
                <p className="counter-digits">: {mins}</p>
                <pre className="counter-description">  Minutes</pre>
            </div>
        )
    }
}
export default Minutes
