// Bomb Component Code Goes Here
import react from "react";

export default class ImageSlider extends react.Component{
  constructor(){
    super()
    this.state={
      currentSlideIndex :0
    }
  }
  render(){
    return(
      'I am on slide {}'
      )
  }
}