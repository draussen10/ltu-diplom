import { makeAutoObservable } from "mobx";

class SearchStore {
    query: string = ''

    constructor() {
        makeAutoObservable(this)
    }

    setQuery = (text: string) => {
        this.query = text
    }
}

export default SearchStore;