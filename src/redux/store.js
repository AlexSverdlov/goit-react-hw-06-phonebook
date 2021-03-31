import { createStore } from 'redux';

const initialState = {
  contacts: {
    items: [
      { id: 1, name: 'ffff', number: '1111' },
      { id: 2, name: 'fffd', number: '2222' },
    ],
    filter: 'ffff',
  },
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'APP/ADD_CONTACT':
      return {
        contacts: {
          ...state.contacts,
          items: [payload, ...state.contacts.items],
        },
      };

    case 'APP/DELETE_CONTACT':
      return {
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(item => item.id !== payload),
        },
      };

    case 'APP/FILTER_CONTACT':
      return {
        contacts: { ...state.contacts, filter: payload },
      };

    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
