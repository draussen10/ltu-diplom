import { makeAutoObservable } from "mobx";

class SearchStore {
    query: string = ''
    selected: string | undefined;

    constructor() {
        makeAutoObservable(this)
    }

    setQuery = (text: string) => {
        this.query = text
    }

    setSelected = (text: string | undefined) => {
        this.selected = text
    }
}

export default SearchStore;