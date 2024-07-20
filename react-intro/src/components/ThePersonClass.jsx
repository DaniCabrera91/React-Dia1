import React, { Component } from "react";

export default class PersonClass extends Component {
  render() {
    return (
      <div className="content">
        <h3>Nombre:</h3>
        <span> {this.props.name} </span>

        <h3>Apellido:</h3>
        <span> {this.props.surname} </span>

        <h3>Edad:</h3>
        <span> {this.props.age} </span>  
      </div>
    )
  }
}