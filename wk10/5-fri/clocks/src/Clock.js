import React from 'react';
import './Clock.css';




class Clock extends React.Component {
  
  constructor() {
    super()
    // // componentDidMount (){
    //   this.setState({time : (new Date()).getTime()})
    //   // update every second
    //   // this.tick = setInterval( () => this.setState(time : this.state.time + 1000, 1000)
    //   // }
    this.setState = {
      date: new Date()
    }
  }

  Timer = () => {
    var date = this.setState.date

    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

    return time
  }


  render() {

    return (
      <div className='popup'>

        <div>
          {/* {this.state.time} */}
          {this.Timer()}
        </div>
      </div>
    );
  }
}

export default Clock;


var date = () => {
  return new Date()
}

var Timer = () => {
  var date = new Date()

  var hours = date.getHours().toString()

  var minutes = date.getMinutes().toString()

  var seconds = date.getSeconds().toString()

  var time = hours.padStart(2, '0') + ":" + minutes.padStart(2, '0') + ":" + seconds.padStart(2, '0')

  return time 
}


setInterval(Timer, 1000)
// padStart(2, '0'))
Timer()