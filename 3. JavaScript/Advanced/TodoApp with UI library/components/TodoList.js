import html from "../core.js"
import TodoItem from "../components/TodoItem.js"
import {connect} from "../store.js"

function TodoList({todos, filters, filter, editIndex}) {
    return html`
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox" onclick="dispatch('toggleAll', this.checked)" ${todos.every(todo => todo.completed) && 'checked'}>
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todos.map((todo, index) => {
                    if(filters[filter](todo)) return TodoItem({todo, index, editIndex})
                })}
            </ul>
        </section>
    `
}

export default connect()(TodoList)