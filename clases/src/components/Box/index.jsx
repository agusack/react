import React, { Component } from 'react'
import './Box.css';

export class Box extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='box'> 
        {this.props.titulo ? this.props.titulo : 'Caja contenedora default'} 
      </div>
    )
  }
}

export default Box