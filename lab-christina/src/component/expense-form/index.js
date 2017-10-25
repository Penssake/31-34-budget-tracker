import React from 'react'

let clearState = {
  title: '',
  price: 0,
}

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    let {expense} = props
    this.state = props.expense || clearState

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(props){
    if(props.expense)
      this.setState(props.expense)
  }

  handleSubmit(event) {
    event.preventDefault()
    let categoryID = this.props.category ?
      this.props.category.id :
      this.props.expense.categoryID

    this.props.onComplete({
      ...this.state,
      categoryID,
    })

    this.setState(clearState)
  }

  handleChange(event) {
    let {name, value, type} = event.target
    value = type === 'number' ? Number(value) : value
    this.setState({[name]: value})
  }

  render() {
    let buttonText = this.props.expense ? 'update' : 'create'
    return (
      <form
        className='expense-form'
        onSubmit={this.handleSubmit}
      >
        <input
          type='text'
          name='name'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleChange}
        />

        <input
          type='number'
          name='price'
          placeholder='price'
          value={this.state.price}
          onChange={this.handleChange}
        />
        <button type='submit'> {buttonText} </button>
      </form>
    )
  }
}

export default ExpenseForm
