export default class AppHeader extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <ul>
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
            </ul>
            `;
        }
    }
}

customElements.define('app-header', AppHeader)