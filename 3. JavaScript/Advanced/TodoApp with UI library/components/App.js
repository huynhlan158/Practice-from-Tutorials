import html from "../core.js"
import Header from "../components/Header.js"
import TodoList from "../components/TodoList.js"
import Footer from "../components/Footer.js"

function App() {
    return html`
        <section class="todoapp">
            ${Header()}
            ${TodoList()}
            ${Footer()}
        </section>
    `
}

export default App