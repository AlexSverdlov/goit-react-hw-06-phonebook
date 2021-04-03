import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, delContact, filterContact } from './actions';

const itemsReduсer = createReducer([], {
  [addContact]: (state, action) => [action.payload, ...state],
  [delContact]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});

const filterReduсer = createReducer('', {
  [filterContact]: (_, action) => action.payload,
});

const contactsReduсer = combineReducers({
  items: itemsReduсer,
  filter: filterReduсer,
});

export default contactsReduсer;
