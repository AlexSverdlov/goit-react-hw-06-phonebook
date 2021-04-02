import { combineReducers } from 'redux';
import {
  createReducer,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { addContact, delContact, filterContact } from './actions';

const persistConfig = {
  key: 'root',
  storage,
};
// const initialState = {
//   contacts: {
//     items: [
//       { id: 1, name: 'ffff', number: '1111' },
//       { id: 2, name: 'fffd', number: '2222' },
//     ],
//     filter: 'ff',
//   },
// };

// const itemsInitialState = [
//   { id: 1, name: 'ffff', number: '1111' },
//   { id: 2, name: 'fffd', number: '2222' },
// ];

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

const rootReducer = combineReducers({
  contacts: contactsReduсer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export default { store, persistor };
