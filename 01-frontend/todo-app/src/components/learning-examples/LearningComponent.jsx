import { Component } from "react"
import FirstComponent, { FifthComponent } from './FirstComponent'
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';

export default class LearningComponent extends Component{
  render(){
    return (
      <>
        <FirstComponent />
        <FifthComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
      </>
    )
  }
}