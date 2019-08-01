import React from 'react';
import './App.css';
import Counter from './components/counter'
import Header from './components/header'
import UserForm from './components/UserForm'  
import { Component } from 'react'

class App extends Component {

  constructor(){
    super()
    this.state = {
      eventName: "",
      eventDate: "",
      eventYear: "",
      eventMonth: "",
      eventDay: "",
      eventHour: ""
    }
  }

  splitDateString = (date) =>{
    var res = date.split(/-|T/)
    this.setState({
      eventYear: res[0],
      eventMonth: res[1],
      eventDay: res[2],
      eventHour: res[3]
    })
  }

  handleEventName = (name) => {
      console.log(name)
      this.setState({
        eventName: name
      })
  }

  handleEventDate = (date) => {
    console.log(date)  
    this.setState({
        eventDate: date
      })
    this.splitDateString(date)
  }

  resetState = () =>{
    this.setState({
      eventName: "",
      eventDate: ""
    })
  }

  handleSubmitThing = (name,date) =>{
    console.log("A venit la App")
    this.resetState()
    this.handleEventName(name)
    this.handleEventDate(date)
  }

  render() {
    return (
      <div className="App">
            <Header/>
            <UserForm handleSubmit={this.handleSubmitThing}/>
            {
              this.state.eventName?
              <div className="event-title">
                <p>{this.state.eventName}</p>
              </div>:
              null
            }
            {
              this.state.eventDate?
              <Counter year={this.state.eventYear} month={this.state.eventMonth} day={this.state.eventDay}/>:
              null
            }
            <footer>
              <p className="footer-text">
              Copyrights© Stefan Popa-2019
              </p>
            </footer>
            
      </div>
    )
  }
}
export default App