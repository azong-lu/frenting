import React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import globalStore from './globalStore';

const storeContext = React.createContext(null);

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(globalStore);
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error('You have forgot to use StoreProvider, shame on you.');
  }
  return store;
};
