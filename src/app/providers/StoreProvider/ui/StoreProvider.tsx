import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from 'shared/config/redux/stateSchema';
import { createReduxStore } from 'shared/config/redux/store';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema;
}

export function StoreProvider({ children, initialState }: StoreProviderProps) {
  const store = createReduxStore(initialState);
  return <Provider store={store}>{children}</Provider>;
}
