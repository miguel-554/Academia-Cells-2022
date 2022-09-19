import { LitElement, html, css } from 'lit-element';

export class AddRecipe extends LitElement {

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
    }
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
        <script type="text/javascript" src="/js/materialize.min.js"></script>
        <div class="center">
            <a class="btn-floating btn-small btn-large add-btn sidenav-trigger" data-target="side-form">
                <i class="material-icons" @click=${this.agregar}>add</i>
            </a>
        </div>
        <div ?hidden="${!this.verReceta}" id="side-form" class="sideform side-form">
            <form class="add-recipe container section">
                <h6>Nueva Receta</h6>
                <div class="divider"></div>
                <div class="input-field">
                <label for="title">Nombre de la receta</label> <br>   
                <input placeholder="e.j. Spaghetti" id="title" type="text" class="validate">
                </div>
                <div class="input-field">
                <label for="ingredients">Ingredientes</label> <br>    
                <input placeholder="e.j. Pasta, Agua, Jitomate" id="ingredients" type="text" class="validate">
                    
                </div>
                <div class="input-field center">
                    <button class="btn-small">Agregar</button>
                </div>
            </form>
        </div>
        `;
    }
    agregar() {
        this.verReceta = !this.verReceta;
    }
}
customElements.define('add-recipe', AddRecipe);