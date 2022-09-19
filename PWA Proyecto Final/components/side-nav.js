import { LitElement, html, css } from 'lit-element';

export class SideNav extends LitElement {

    static get properties() {
        return {
            verReceta: { type: Boolean }
        }
    }

    static styles = css`
    :host {
        display: block;
        primary: #FFE9D2;
        secondary: #FFE1C4;
        title: #FF8816;
        /* colours */
        :root{
          --primary: #FFE9D2;
          --secondary: #FFE1C4;
          --title: #FF8816;
        }
        
        /* layout styles */
        nav{
          background: var(--primary);
          border-bottom: 10px solid var(--secondary);
        }
        nav a{
          text-transform: uppercase;
          color: var(--title);
        }
        nav a span{
          font-weight: bold;
        }
        nav .sidenav-trigger{
          margin: 0;
        }
        
        /* recipe styles */
        .recipes{
          margin-top: 20px;
        }
        .card-panel.recipe{
          border-radius: 8px;
          padding: 10px;
          box-shadow: 0px 1px 3px rgba(90,90,90,0.1);
          display: grid;
          grid-template-columns: 2fr 6fr 1fr;
          grid-template-areas: "image details delete";
          position: relative;
        }
        .recipe img{
          grid-area: image;
          max-width: 60px;
        }
        .recipe-details{
          grid-area: details;
          margin-top: 6px;
        }
        .recipe-delete{
          grid-area: delete;
          position: absolute;
          bottom: 0px;
          right: 0px;
        }
        .recipe-delete i{
          font-size: 18px;
        }
        .recipe-title{
          font-weight: bold;
        }
        .recipe-ingredients{
          font-size: 0.8em;
        }
        
        /* form-styles */
        .add-btn{
          background: var(--title) !important;
        }
        input{
          box-shadow: none !important;
          -webkit-box-shadow: none !important;
        }
        .side-form button{
          background: var(--title);
          box-shadow: 1px 1px 3px rgba(90,90,90,0.2);
        }
        form .input-field{
          margin-top: 30px;
        }
    `;

    render() {
        return html`
<link type="text/css" href="/css/materialize.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link type="text/css" href="/css/styles.css" rel="stylesheet">
<script type="text/javascript" src="/js/materialize.min.js"></script>
<nav class="z-depth-0">
    <div class="nav-wrapper container">
        <a href="/">Comida<span>Ninja</span></a>
        <span class="right grey-text text-darken-1">
            <i @click="${this.agregar}" class="material-icons sidenav-trigger" data-target="side-menu">menu</i>
        </span>
    </div>
</nav>
<ul ?hidden="${!this.verReceta}" id="side-menu" class="sidenav side-menu">
    <li><a class="subheader">COMIDANINJA</a></li>
    <li><a href="/" class="waves-effect">Inicio</a></li>
    <li><a href="/pages/about.html" class="waves-effect">acerca de</a></li>
    <li>
        <div class="divider"></div>
    </li>
    <li><a href="/pages/contact.html" class="waves-effect">
            <i class="material-icons">mail_outlin</i> contacto</a>
    </li>
</ul>
        `;
    }
    agregar() {
        this.verReceta = !this.verReceta;
    }
}
customElements.define('side-nav', SideNav);