import { defineStore } from "pinia";

export const UseCountStore = defineStore({
    id: 'count',
    state: () => ({
        count: 0
    }),
    getters: {
        doubleCount: state => state.count * 2
    },
    actions: {
        add() {
            this.count ++
        }
    }
})