import React from 'react'

import Button from './Button';


// import component
import Tasks from './Tasks';





export default function Header(props) {

    const onClick = () => {
        console.log("click");
    }

    return (
        <header className="header">
            <h1>{props.tittle}</h1>
            <Button color="white" backgroundColor="blue" borderColor="red" onClick={onClick} />
            <Tasks/>
        </header>
    )
}

Header.defaultProps = {
    tittle: 'Task tracker'
}











