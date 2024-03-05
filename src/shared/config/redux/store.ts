import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './stateSchema';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    devTools: __IS_DEV__,
    reducer: {},
    preloadedState: initialState,
  });
}
