
import React from 'react'


//image
import Hero1 from "../../assets/images/hero1.jpg";
import Hero2 from "../../assets/images/hero2.jpg";

//import icons
import {FaAngleRight,FaAngleLeft} from "react-icons/fa";

export default class Hero extends React.Component {


    constructor(props) {
        super(props);

        
        this.state={
          imgeList:[Hero1,Hero2],
          imageActive:[false,false],
          imagePicked:1
        };
        //binding
        this.updateimage=this.updateimage.bind(this);
    }

    updateimage(){
      
      let currentIndex=this.state.imagePicked;
      if(currentIndex===0){
        this.setState({imagePicked:1});
      }else{
        this.setState({imagePicked:0});
      }
      
    }

    componentDidMount(){
      this.timerImage=setInterval(this.updateimage,5000);
    }

    componentWillUnmount(){

    }


   
  render() {
    return (
      <div className="container-fluid my-2 p-0 hero">
          {/* <FaAngleLeft className="faAngleLeft" onClick={this.slideImage}/>
          <FaAngleRight className="faAngleRight "onClick={this.slideImage}/> */}
         <img src={this.state.imgeList[this.state.imagePicked]} className={`img-fluid heroImage`} style={{width:"100vw"}} alt="gambar" />
      </div>
    )
  }
}


