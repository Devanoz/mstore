
import React from 'react'

import Hero1 from "../../images/hero1.jpg";

//import icons
import {FaAngleRight,FaAngleLeft} from "react-icons/fa";

export default class Hero extends React.Component {

    constructor(props) {
        super(props);

        this.slideImage=this.slideImage.bind(this);
    }


    slideImage(event){
        event.preventDefault();
        console.log("clicked");
    }
  render() {
    return (
      <div className="container-fluid my-2 p-0 hero">
          <FaAngleLeft className="faAngleLeft" onClick={this.slideImage}/>
          <FaAngleRight className="faAngleRight "onClick={this.slideImage}/>
         <img src={Hero1} class="img-fluid" style={{width:"100vw"}}/>
      </div>
    )
  }
}


