import { createContext, useContext } from "react";
import SearchStore from "./exampleStore/searchStore";

export const index = {
    SearchStore
};

export const StoreContext = createContext(index);

export const useStore = () => {
    return useContext<typeof index>(StoreContext);
};
