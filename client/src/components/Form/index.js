import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import axios from 'axios'

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      company: null,
      message: null,
      product: null,
      errors: {
        fullName: '',
        email: ''
      },
      selectProduct: []
    };
  }

  componentDidMount = () => {
    axios.get("/api/products").then(res =>{
      this.setState({
          selectProduct: res.data
      })
  });
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName': 
        errors.fullName = 
          value.length < 5
            ? 'Full Name must be 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info(this.state)
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className="container">
        <div className='row'>
          <div className='col wrapper'>
            <h2 className="mb-4 mt-5">Contact support</h2>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className='support-input'>
                <label htmlFor="fullName">Name</label>
                <input type='text' name='fullName' onChange={this.handleChange} noValidate />
                {errors.fullName.length > 0 && 
                  <span className='error'>{errors.fullName}</span>}
              </div>
              <div className='support-input'>
                <label htmlFor="company">Company</label>
                <input type='text' name='company' onChange={this.handleChange} noValidate />
              </div>
              <div className='support-input'>
                  <label htmlFor="company">Product in question</label>
                  <select name="product" onChange={this.handleChange}>
                  {this.state.selectProduct.map(product => (
                  <option>{product.productTitle}</option>
                ))}
                  </select>
              </div>
              <div className='support-input'>
                <label htmlFor="email">Email</label>
                <input type='email' name='email' onChange={this.handleChange} noValidate />
                {errors.email.length > 0 && 
                  <span className='error'>{errors.email}</span>}
              </div>
              <div className='support-input'>
                <label htmlFor="message">Details of issue</label>
                <textarea type='text' name='message' onChange={this.handleChange} noValidate />
              </div>
              <div className='submit'>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}