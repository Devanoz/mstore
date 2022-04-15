import React from 'react'




export default function Button(props) {
    const buttonStyle = {
        color: props.color,
        backgroundColor: "black",
        borderColor: "black"
    }

    // const onClick=(event)=>{
    //     console.log("click");
    // }

    return (
        <button className="btn" style={buttonStyle } onClick={props.onClick}>add</button>
    );
}


Button.defaultProps = {
    color:"steelblue"
}
