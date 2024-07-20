import React from "react"

function Person(props) {
  return (
      <div className="content"> 
        <h3>Nombre:</h3>  
        <span>{props.name}</span>
        <h3>Apellido:</h3>  
        <span>{props.surname}</span>
        <h3>Edad:</h3>  
        <span>{props.age}</span>
      </div>
  )
}

export default Person

