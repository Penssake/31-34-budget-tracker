import React from 'react'

let clearState = {
  title: '',
  amount: '0',
}

class CategoryForm extends React.Component {
  constructor(props) {
    super(props)
    this.state =  this.props.category || clearState

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.category){
      this.setState(nextProps.category)
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onComplete(this.state)
    this.setState(clearState)
  }

  handleChange(event) {
    let {name, value, type} = event.target
    value = type === 'number' ? Number(value) : value;
    this.setState({[name]: value})
  }

  render() {
    let buttonText = this.props.category ? 'update' : 'create'
    return (
      <form
        className='category-form'
        onSubmit={this.handleSubmit}
      >
        <input
          type='text'
          name='name'
          placeholder='category name'
          value={this.state.name}
          onChange={this.handleChange}
        />

        <input
          type='number'
          name='amount'
          placeholder='amount'
          value={this.state.amount}
          onChange={this.handleChange}
        />
        <button type='submit'> {buttonText} </button>
      </form>
    )
  }
}

export default CategoryForm
