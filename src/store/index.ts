import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import questionnaireReducer from './questionnaireSlice';

const persistConfig = {
  key: 'questionnaire',
  storage,
  whitelist: ['answers', 'history'],
};

const persistedQuestionnaireReducer = persistReducer(
  persistConfig,
  questionnaireReducer,
);

export const store = configureStore({
  reducer: {
    questionnaire: persistedQuestionnaireReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        ignoredPaths: ['_persist'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
