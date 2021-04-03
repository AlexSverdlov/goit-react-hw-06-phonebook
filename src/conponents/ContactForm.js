import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import * as actions from '../redux/actions';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };
    if (
      this.props.items.find(
        item => item.name.toUpperCase() === this.state.name.toUpperCase(),
      )
    ) {
      alert(this.state.name + ' is already in contacts');
    } else {
      this.props.onSubmit(contact);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          width: '200px',
          padding: '10px',
          border: '1px solid black',
        }}
      >
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button type="Submit">Add contact</button>
      </form>
    );
  }
}
const mapStateToProps = state => ({
  items: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: item => dispatch(actions.addContact(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
