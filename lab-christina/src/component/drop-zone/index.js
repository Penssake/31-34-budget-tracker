import React from 'react'
import './drop-zone.scss'

class DropZone extends React.Component {
  constructor(props){
    super(props)

    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
  }

  handleDragOver(event){
    event.preventDefault()
  }

  handleDrop(event){
    try {
      let data = JSON.parse(event.dataTransfer.getData('application/json'));
      this.props.onComplete(data);
      console.log({data});
    } catch (error) {
      console.log('__BAD DRAG DATA__', error);
    }
  }

  render(){
    return (
      <div
        className='drop-zone'
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop} >
        <h1>DROP HERE</h1>
        {this.props.children}
      </div>
    )
  }
}

export default DropZone
