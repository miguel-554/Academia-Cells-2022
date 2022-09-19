import { LitElement, html, css } from 'lit-element';

export class RecipesComponent extends LitElement {

    static styles = css`
    :host {
        display: block;
        primary: #FFE9D2;
        secondary: #FFE1C4;
        title: #FF8816;
    }
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
    `;

    render() {
        return html`
         <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <script type="text/javascript" src="/js/materialize.min.js"></script>
        <link type="text/css" href="/css/materialize.min.css" rel="stylesheet">
        <div class="recipes container grey-text text-darken-1">
            <div class="card-panel recipe white row">
                <img src="/img/dish.png" alt="recipe thumb">
                <div class="recipe-details">
                    <div class="recipe-title">Edame Noodles</div>
                    <div class="recipe-ingredients">Edame Beans, Noodels, Garlic oil</div>
                </div>
                <div class="recipe-delete">
                    <i class="material-icons">delete_outline</i>
                </div>
            </div>
        `;
    }
}
customElements.define('recipes-component', RecipesComponent);