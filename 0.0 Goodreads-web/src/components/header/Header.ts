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
            <link rel="stylesheet" href="components/header/Header.css">
           
            <header class="header">
                <p class="pbold">Commemorate international women's day</p>
                <p>Discover New Books by Woman authors</p>
            </header>
            `;
        }
    }
}

customElements.define('app-header', AppHeader)