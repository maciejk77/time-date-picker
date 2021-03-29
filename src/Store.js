import { createContext, useReducer } from 'react';
import reducer from './reducers';

const initialState = {
  days: [],
  times: [],
  selectedDay: null,
  selectedTime: null,
};

export const Store = createContext(initialState);

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}
