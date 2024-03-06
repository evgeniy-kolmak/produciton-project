import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './stateSchema';
import { userReduser } from 'entities/User';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    devTools: __IS_DEV__,
    reducer: {
      user: userReduser,
    },
    preloadedState: initialState,
  });
}
