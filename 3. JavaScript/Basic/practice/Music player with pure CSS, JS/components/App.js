import html from "../core.js"
import Header from "../components/Header.js"

function App() {
    return  html`
        <section class="player">
            <div class="dashboard">
                ${Header()}
            </div>
        </section>
    `
}

export default App