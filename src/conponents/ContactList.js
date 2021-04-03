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
// const visibleContacts = (contacts, filter) =>
//   contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase()),
//   );

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: visibleContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDelete: id => dispatch(actions.delContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
