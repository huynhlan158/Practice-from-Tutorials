import html from "../core.js"
import {connect} from "../store.js"

function Footer({todos, filters, filter}) {
    return html`
        <footer class="footer">
            <span class="todo-count"><strong>${todos.filter(todo => !todo.completed).length}</strong> item left</span>
            <ul class="filters">
                ${Object.keys(filters).map(type => html`
                    <li onclick="dispatch('switchType', '${type}')">
                        <a class="${type === filter && 'selected'}" href="#/">${type[0].toUpperCase() + type.slice(1)}</a>
                    </li>
                `)}
            </ul>
            <button class="clear-completed" onclick="dispatch('clearCompleted')">Clear completed</button>
        </footer>
    `
}

export default connect()(Footer)