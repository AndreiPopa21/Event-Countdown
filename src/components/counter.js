import React, { Component } from 'react';
import '../Counter.css';
import zero from '../zero.png'
import { Button } from '@material-ui/core';

import Days from './days'
import Hours from './hours';
import Minutes from './minutes';
import Seconds from './seconds'
import DoubleDot from './doubledot'

class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
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
        const today = new Date();
        const hour = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();
        
        const givenDate = new Date(this.props.year, this.props.month-1, this.props.day)
        const t = (givenDate.getTime() - today.getTime())

        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);

        return (
            <div className="counter-text">
                
                <div className="counter-container">
                    <Days days={days}/>
                  
                    <Hours hours={hours}/>
                 
                    <Minutes minutes={mins}/>
                  
                    <Seconds seconds={secs}/>     
                </div>
    
            </div>

        )
    }
}

/*
<h1>Time: <span>
                    {hour < 10 ? <span>0{hour}</span> : hour}:
                    {minutes < 10? <span>0{minutes}</span>: minutes}:
                    {seconds < 10? <span>0{seconds}</span>:seconds}
                    </span>
                </h1>*/

export default Counter
