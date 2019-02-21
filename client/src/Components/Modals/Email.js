import React, { Component } from 'react'
import './email.css'
import {Form, FormGroup, Input, Label, Button, Alert} from 'reactstrap'
// import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

class EmailModal extends Component {
  
      constructor(){
        super()
        this.state={
          name: '',
          phoneNumber: '',
          message: '',
          address: '',
          sqft: '',
          city: '',
          email: '',
          realtor: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit =this.handleSubmit.bind(this)
      }

      handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
      }

      async handleSubmit(e) {
        e.preventDefault();
        const {name, phoneNumber, message, address, sqft, city, email, realtor} = this.state
        const form = await axios.post('/api/form', {
          name, 
          phoneNumber,
          message,
          address,
          sqft,
          city,
          email,
          realtor
        })
      }

      render(){
      return (
        <Form className="email" onSubmit={this.handleSubmit} style={{backgroundColor: '#731313fc', color: 'white', height: '500px', overflowY: 'auto'}}>
          <h3 className="emailHeader">Give Us A little information about your home and a way to contact you and we will get back to you as soon as possible to set up a time for your inspection</h3>

          <FormGroup className="formgroup">
            <Label for="name">Name:</Label><br/>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange} />
          </FormGroup>

          <FormGroup className="formgroup">
            <Label for="email">Email:</Label><br/>
            <Input
              type="email"
              name="email"
              onChange={this.handleChange} />
          </FormGroup>

          <FormGroup className="formgroup">
            <Label for="phoneNumber">Phone Number:</Label><br/>
            <Input
              type="text"
              name="phoneNumber"
              onChange={this.handleChange} />
          </FormGroup>

          <FormGroup className="formgroup">
            <Label for="address">Address:</Label><br/>
            <Input
              type="text"
              name="address"
              onChange={this.handleChange} />
          </FormGroup>

          <FormGroup className="formgroup">
            <Label for="city">City:</Label><br/>
            <Input
              type="text"
              name="city"
              onChange={this.handleChange} />
          </FormGroup>

          <FormGroup className="formgroup">
            <Label for="sqft">How Many Square Feet?</Label><br/>
            <Input
              type="text"
              name="sqft"
              onChange={this.handleChange} />
          </FormGroup>

          <FormGroup className="formgroup">
            <Label for="realtor">Are You A Realtor?</Label><br/>
            <Input
              type="text"
              name="realtor"
              onChange={this.handleChange} />
          </FormGroup>

          <FormGroup className="formgroup">
            <Label for="message"><span>A Few Details (Age, Additions, etc)</span>:</Label><br/>
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