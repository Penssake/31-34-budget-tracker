import React from 'react';

class Draggable extends React.Component {
  constructor(props){
    super(props)

    this.handleDragStart = this.handleDragStart.bind(this);
  }

  handleDragStart(event){
    event.dataTransfer.setData('application/json', JSON.stringify(this.props.data));
  }

  render(){
    return (
      <div className='drag-zone' draggable onDragStart={this.handleDragStart}>
        {this.props.children}
      </div>
    )
  }
};

export default Draggable;
