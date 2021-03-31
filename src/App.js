import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import ContactForm from './conponents/ContactForm';
import Filter from './conponents/Filter';
import ContactList from './conponents/ContactList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App" style={{ textAlign: 'left', margin: '20px' }}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contact</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}
export default App;
