import React from 'react'

import { useState } from 'react';

 

export default function Tasks() {
    const [tasks,setTask]=useState([
        {
            id:1,
            text:"makan",
            reminder:true
            
        },
        {
            id:2,
            text:"sholat",
            reminder:true
            
        },
        {
            id:3,
            text:"main game",
            reminder:false
            
        },
    ])

  return (
    <div>
        {tasks.map((task) =>{
            return <h3 className="card" key={task.id}>{task.text}</h3>
        })}
    </div>
  )
}
