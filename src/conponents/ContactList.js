import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

const ContactList = ({ filter, contacts, onDelete }) => {
  const normalizeSearchItem = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeSearchItem),
  );
  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
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

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(actions.delContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
