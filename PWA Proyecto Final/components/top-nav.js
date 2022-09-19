import { LitElement, html, css } from 'lit-element';

export class TopNav extends LitElement {

  static get properties() {
    return {
      verReceta: { type: Boolean }
    }
  }

  static styles = css`
    :host {
        display: Flex;
        primary: #FFE9D2;
        secondary: #FFE1C4;
        title: #FF8816;
    }
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
    `;

  render() {
    return html`
        <link type="text/css" href="/css/materialize.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <script type="text/javascript" src="/js/materialize.min.js"></script>
        <!-- top nav -->
        <nav class="z-depth-0">
          <div class="nav-wrapper container">
            <a href="/">Comida<span>Ninja</span></a>
            <span class="right grey-text text-darken-1">
              <i class="material-icons sidenav-trigger" data-target="side-menu">menu</i>
            </span>
          </div>
        </nav>
        `;
  }
}
customElements.define('top-nav', TopNav);