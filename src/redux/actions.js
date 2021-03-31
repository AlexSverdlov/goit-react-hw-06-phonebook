// value- объект, новый контакт в списке
export const addContact = value => ({
  type: 'APP/ADD_CONTACT',
  payload: value,
});

export const delContact = id => ({
  type: 'APP/DELETE_CONTACT',
  payload: id,
});

export const filterContact = value => ({
  type: 'APP/FILTER_CONTACT',
  payload: value,
});
