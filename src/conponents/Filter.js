import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

const Filter = ({ textFilter, onChange }) => (
  <label>
    Find contact by name
    <input
      style={{ display: 'block' }}
      type="text"
      name="filter"
      value={textFilter}
      onChange={onChange}
    />
  </label>
);

const mapStateToProps = state => ({ textFilter: state.contacts.filter });

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.filterContact(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
