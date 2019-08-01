import React, { Component } from 'react'
import "../UserForm.css"
import Countdowner from './countdowner'


class UserForm extends Component {

    constructor(props){
        super(props)

        const defaultDate = this.setTodayDate() 
        this.state={
            eventName: "",
            eventDate: defaultDate,
            defaultEventDate: defaultDate,
            didSubmit: false
        }
    }

    setTodayDate = ()=>{
        var today = new Date();
        var d = today.getDate();
        var m = today.getMonth() + 1;
        var y = today.getFullYear();
        var h = today.getHours();
        var min = today.getMinutes();

        var data = "";

        if(d < 10){
            d = "0"+d;
        };
        if(m < 10){
            m = "0"+m;
        };

        if(h < 10){
            h = "0"+h;
        }; 
        
        if(min < 10){
            min = "0"+ min;
        };
    
        data = y+"-"+m+"-"+d+"T"+h+":"+min;
        console.log(data)
        return data
    }

    handleSubmit = (event)=>{
        event.preventDefault()
        console.log(this.state.eventDate, this.state.eventName)
        this.props.handleSubmit(this.state.eventName,this.state.eventDate)
    }

    handleEventName = (event)=>{
        
        const value = event.target.value
        this.setState({
              eventName: value
        })
    }

    handleEventDate = (event) => {
        const value = event.target.value
        this.setState({
            eventDate: value
        })
    }

    render() {

              

        return (
            <div className="container">
                <form className="form-container" onSubmit={this.handleSubmit}>
                    <label>
                        Event name:
                        <input type="text" name="event name" value ={this.state.value} onChange={this.handleEventName}/>
                    </label>
                    <label>
                        Event date:
                        <input type="datetime-local" name="event name" defaultValue={this.state.defaultEventDate} onChange={this.handleEventDate}/>
                    </label>
                    <label>
                        <input type="submit" value="Submit"/>
                    </label>
                </form>
                <div className = "divider"/>

            </div>
           
        )
    }
}

export default UserForm 
