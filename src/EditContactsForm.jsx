import React, { Component } from 'react';

class ContactsForm extends Component {
  state = {
    name: '',
    phoneNumber: '',
    location: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, phoneNumber, location } = this.state;
    const newContact = { name, phoneNumber, location };
    this.props.handleAddContact(newContact);
    this.setState({ name: '', phoneNumber: '', location: '' });
  };

  render() {
    return (
      <div>
        <h2>Add Contact</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name: </label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div>
            <label>Phone Number: </label>
            <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
          </div>
          <div>
            <label>Location: </label>
            <input type="text" name="location" value={this.state.location} onChange={this.handleChange} />
          </div>
          <button type="submit">Add Contact</button>
        </form>
      </div>
    );
  }
}

export default ContactsForm;