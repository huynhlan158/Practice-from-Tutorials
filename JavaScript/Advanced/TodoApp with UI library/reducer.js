import storage from "./util/storage.js"

const init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed
    },
    editIndex: null
}

const actions = {
    add({todos}, newTodo) {
        if(newTodo) {
            todos.push({title: newTodo, completed: false})
            storage.set(todos)
        }
    },
    toggle({todos}, index) {
        todos[index].completed = !todos[index].completed
        storage.set(todos)
    },
    toggleAll({todos}, checked) {
        todos.forEach(todo => todo.completed = checked)
        storage.set(todos)
    },
    destroy({todos}, index) {
        todos.splice(index, 1)
        storage.set(todos)
    },
    switchType(state, type) {
        state.filter = type
    },
    clearCompleted(state) {
        state.todos = state.todos.filter(todo => !todo.completed)
        storage.set(state.todos)
    },
    startEdit(state, index) {
        state.editIndex = index
    },
    endEdit(state, newTitle) {
        if(state.editIndex !== null) {
            if(newTitle) {
                state.todos[state.editIndex].title = newTitle
                state.editIndex = null
                storage.set(state.todos)
            } else {
                this.destroy(state, state.editIndex)
            }
        }
    },
    cancelEdit(state) {
        state.editIndex = null
    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}