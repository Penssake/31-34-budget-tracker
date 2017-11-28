import React from 'react'

class Modal extends React.Component {
  render(){
    return (
      <div
        style={{
          display: this.props.show ? 'block' : 'none',
          background: 'blue',
          width: '40%'
        }}
        className='modal'>
        <button onClick={this.props.onClose}>close</button>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Modal
