import { makeAutoObservable } from "mobx";

class ExampleStore {
    count: number = 0

    constructor() {
        makeAutoObservable(this)
    }

    plus = (count: number) => {
        this.count += count
    }
}

export default ExampleStore;