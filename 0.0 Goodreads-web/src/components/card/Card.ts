export default class AppCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        if (this.shadowRoot)
        this.shadowRoot.innerHTML=`
        
        <link rel="stylesheet" href="./app/components/Card/Card.css">

        <section>
        
        

        </section>

        `
    }
}

customElements.define('app-card', AppCard)
