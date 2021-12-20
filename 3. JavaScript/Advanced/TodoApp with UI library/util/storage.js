const TODOS_STORAGE_KEY = 'TODOS#8'

export default {
    set(todos) {
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
    },
    get() {
        return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || []
    }
}