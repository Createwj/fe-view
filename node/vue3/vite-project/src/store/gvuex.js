import { inject, reactive } from "vue";
import { Store } from "vuex";

const STORE_KEY = '__store__'
function useStore() {
    return new inject(STORE_KEY)
}
function createStore(options) {
    return new Store(options)
}

class Store {
    constructor(options) {
        this.$options = options
        this._stste = reactive({
            data: options.state()
        })
        this._mutations = options.mutations
    }
    get state() {
        return this._state.data
    }
    commit = (type, payload) => {
        const entry = this._mutations[type]
        entry && entry(this.state, payload)
    }
    install(app) { 
        app.provide(STORE_KEY, this) 
    }
}
export { createStore, useStore }