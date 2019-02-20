import React, { Component } from 'react'
import './email.css'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'
// import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

class EmailModal extends Component {
      constructor(){
        super()
        this.state={
          name: '',
          phoneNumber: '',
          message: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit =this.handleSubmit.bind(this)
      }

      handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
      }

      async handleSubmit(e) {
        e.preventDefault()

        const {name, phoneNumber, message} = this.state

        const form = await axios.post('/api/form', {
          name, 
          phoneNumber,
          message
        })

      }
      render(){
      return (
        <Form className="email" onSubmit={this.handleSubmit} style={{backgroundColor: '#731313fc', color: 'white', height: '500px', overflowY: 'auto', borderRadius: '10px'}}>
          <FormGroup>
            <Label for="name">Name:</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="phoneNumber">Phone Number:</Label>
            <Input
              type="text"
              name="phoneNumber"
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="message">Message:</Label>
            <Input
              type="textarea"
              name="message"
              onChange={this.handleChange} />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      );
      }
    }

export default EmailModal