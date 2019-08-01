import React, { Component } from 'react'
import '../Counter.css'

class Seconds extends Component {
    render() {

        const secs = this.props.seconds < 10? "0" + this.props.seconds: this.props.seconds

        return (
            <div className="seconds-container">
                <p className="counter-digits">: {secs}</p>
                <pre className="counter-description">  Seconds</pre>
            </div>
        )
    }
}
export default Seconds
