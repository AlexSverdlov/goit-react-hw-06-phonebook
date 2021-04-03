import React from 'react';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => onDelete(id)} style={{ marginLeft: '20px' }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
