
import React from 'react'


//image
import Hero1 from "../../assets/images/hero1.jpg";
import Hero2 from "../../assets/images/hero2.jpg";

//import icons
import {FaAngleRight,FaAngleLeft} from "react-icons/fa";

export default class Hero extends React.Component {


    constructor(props) {
        super(props);

        
        this.state=[Hero1,Hero2];
        //binding
        this.updateimage=this.updateimage.bind(this);
    }

    updateimage(){

    }


   
  render() {
    return (
      <div className="container-fluid my-2 p-0 hero">
          {/* <FaAngleLeft className="faAngleLeft" onClick={this.slideImage}/>
          <FaAngleRight className="faAngleRight "onClick={this.slideImage}/> */}
         <img src={this.state[0]} className="img-fluid" style={{width:"100vw"}} alt="gambar"/>
      </div>
    )
  }
}


