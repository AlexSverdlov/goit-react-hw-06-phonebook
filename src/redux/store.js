import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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
import contactsReduсer from './reducer';

// const initialState = {
//   contacts: {
//     items: [
//       { id: 1, name: 'ffff', number: '1111' },
//       { id: 2, name: 'fffd', number: '2222' },
//     ],
//     filter: 'ff',
//   },
// };

const itemsPersistConfig = {
  key: 'items',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(itemsPersistConfig, contactsReduсer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export default { store, persistor };
