// Bomb Component Code Goes Here
import react from "react"

export default class Bomb extends react.Component{
  constructor(props){
    super()
    this.state={
      secondsLeft:props.initialCount
    }
  }
  render(){
    let check=this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
    retur(
      <p>{check}</p>
      )
  }
}