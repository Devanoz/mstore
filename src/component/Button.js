import React from 'react'




export default function Button(props) {
    const buttonStyle = {
        color:"white",
        backgroundColor:props.color,
        borderColor: "black"
    }

    // const onClick=(event)=>{
    //     console.log("click");
    // }

    return (
        <button className="btn" style={buttonStyle } onClick={props.onClick}>{props.value}</button>
    );
}


Button.defaultProps = {
    color:"steelblue"
}
