import React from 'react';

const Contacts = ({ contacts, handleDeleteContact }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.phoneNumber} - {contact.location}
            <button onClick={() => handleDeleteContact(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;