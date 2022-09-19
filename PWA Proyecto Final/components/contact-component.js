import { LitElement, html, css } from 'lit-element';

export class ContactComponent extends LitElement {

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
            <h5 class="center">Contact Us</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, porro voluptatum illum veniam eaque sunt sit
                labore provident eligendi! Voluptate amet suscipit inventore unde maxime atque impedit officia nobis laboriosam!
            </p>
            <div class="divider"></div>
            <h6>Encuentranos en:</h6>
            <ul>
                <li>123 Spicy Noodle Road</li>
                <li>Manchester, UK</li>
            </ul>
        </div>
        `;
    }
}
customElements.define('contact-component', ContactComponent);