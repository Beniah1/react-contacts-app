import React, { Component } from 'react';

class EditContactsForm extends Component {
  state = {
    name: this.props.contact.name,
    phoneNumber: this.props.contact.phoneNumber,
    location: this.props.contact.location
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, phoneNumber, location } = this.state;
    const updatedContact = { name, phoneNumber, location };
    this.props.handleEditContact(updatedContact);
  };

  render() {
    return (
      <div>
        <h2>Edit Contact</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Phone Number: </label>
            <input
              type="text"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Location: </label>
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Update Contact</button>
        </form>
      </div>
    );
  }
}

export default EditContactsForm;