
import React from 'react'

import Hero1 from "../../../public/images/hero1.jpg";


export default class Hero extends React.Component {
  render() {
    return (
      <div className="container-fluid my-5 p-0">
         <img src={Hero1} class="img-fluid" style={{width:"100vw"}}/>
      </div>
    )
  }
}


