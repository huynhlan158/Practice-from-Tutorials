import html from "../core.js"

function Header() {
    return html`
        <div class="header">
            <h4>Now playing</h4>
            <i class="material-icons">arrow_drop_down</i>
            <h2>Name of the song</h2>
        </div>
    `
}

export default Header