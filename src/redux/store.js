import { configureStore, combineReducers } from '@reduxjs/toolkit';
import usersSlice from './usersSlice';
import filtersSlice from './filterSlice';
import { persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
 } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  users: usersSlice.reducer,
  filters: filtersSlice.reducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

 const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });

  export const persistor = persistStore(store);

  export default store;