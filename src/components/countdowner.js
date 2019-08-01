import React, { Component } from 'react'

class Countdowner extends Component {

    constructor(props){
        super(props)
        this.state={
            seconds: 0
        }
    }

    tick = () =>{
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }))
    }

    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 1000)
    }

    componentWillMount(){
        clearInterval(this.interval)
    }


    render() {
        return (
            <div>
                <h1>{this.props.eventName}</h1>
            </div>
        )
    }
}

export default Countdowner
