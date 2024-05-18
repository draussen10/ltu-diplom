import { createContext, useContext } from "react";
import ExampleStore from './exampleStore/exampleStore';

export const stores = {
    exampleStore: new ExampleStore,
};

export const StoreContext = createContext(stores);

export const useStore = () => {
    return useContext<typeof stores>(StoreContext);
};
