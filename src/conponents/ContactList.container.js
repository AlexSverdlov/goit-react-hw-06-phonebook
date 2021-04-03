import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import ContactList from './ContactList.view';

const visibleContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: visibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(actions.delContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
