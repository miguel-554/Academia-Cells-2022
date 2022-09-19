import { LitElement, html, css } from 'lit-element';

export class AboutComponent extends LitElement {

    static styles = css`
    :host {
        display: block;
    }
    `;

    render() {
        return html`
        <link type="text/css" href="/css/materialize.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <script type="text/javascript" src="/js/materialize.min.js"></script>
        <link rel="manifest" href="/manifest.json">
        <!-- content -->
        <div class="container grey-text">
            <h5 class="center">Acerca de Comida Ninja</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, porro voluptatum illum veniam eaque sunt sit
                labore provident eligendi! Voluptate amet suscipit inventore unde maxime atque impedit officia nobis laboriosam!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus omnis, ea doloremque
                exercitationem id necessitatibus. Voluptatem officiis cupiditate commodi totam, hic laborum est ducimus amet
                iure, non dignissimos illo.</p>
        </div>
        `;
    }
}
customElements.define('about-component', AboutComponent);