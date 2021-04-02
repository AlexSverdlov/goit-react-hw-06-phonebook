import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('APP/ADD_CONTACT');
export const delContact = createAction('APP/DELETE_CONTACT');
export const filterContact = createAction('APP/FILTER_CONTACT');
