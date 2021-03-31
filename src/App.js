import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './conponents/ContactForm';
import Filter from './conponents/Filter';
import ContactList from './conponents/ContactList';
import './App.css';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts: contacts });
    } else {
      this.setState({ contacts: [] });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = data => {
    const contact = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };

    if (this.state.contacts.find(item => item.name === contact.name)) {
      alert(contact.name + ' is already in contacts');
    } else {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  handleDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <div className="App" style={{ textAlign: 'left', margin: '20px' }}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contact</h2>
        <Filter value={this.state.filter} onChange={this.handleChange} />
        <ContactList
          filter={this.state.filter}
          contacts={this.state.contacts}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
