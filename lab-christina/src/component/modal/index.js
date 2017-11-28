import React from 'react'
import './modal.scss'


class Modal extends React.Component {
  render(){
    return (
      <div
        style={{
          display: this.props.show ? 'block' : 'none',
          background: 'lavender',
          width: '100%',
          height: '30%'
        }}
        className='modal'>
        <button className='modal-close'onClick={this.props.onClose}>x</button>
        <p>Update your category name & budget</p>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Modal
