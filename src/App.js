// App.js
import React, { Component } from 'react';
import Contacts from './Contact';
import EditContactsForm from './EditContactsForm';

class App extends Component {
  state = {
    contacts: [
      { name: 'Inzami Kumi', phoneNumber: '123-456-7890', location: 'New York' },
      { name: 'Ilaiki Jami', phoneNumber: '987-654-3210', location: 'San Francisco' },
      { name: 'Danie Diedxe', phoneNumber: '555-123-4567', location: 'Los Angeles' }
    ]
  };

  render() {
    return (
      <div>
        <Contacts contacts={this.state.contacts} handleDeleteContact={this.handleDeleteContact} />
        <EditContactsForm contact={this.state.contacts[0]} handleEditContact={this.handleEditContact} />
      </div>
    );
  }

  handleAddContact = (newContact) => {
    this.setState({ contacts: [...this.state.contacts, newContact] });
  }

  handleDeleteContact = (index) => {
    const updatedContacts = [...this.state.contacts];
    updatedContacts.splice(index, 1);
    this.setState({ contacts: updatedContacts });
  }

  handleEditContact = (updatedContact) => {
    const updatedContacts = this.state.contacts.map((contact) =>
      contact === this.state.contacts[0] ? updatedContact : contact
    );
    this.setState({ contacts: updatedContacts });
  }
}

export default App;