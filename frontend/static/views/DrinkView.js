import AbstractView from "./AbstractView.js";

    export default class extends AbstractView {
        constructor(params) {
        super(params);
        this.setTitle("Viewing Cocktails");
    }

    async getHtml() {
    // console.log(this.params.id);

        const nu = Number(this.params['idDrink']);
        async function getData(url) {
        const response = await fetch(url);

        return response.json();
    }

    const data = await getData('/static/views/drink.json');
    let drinks = data['drinks']

    const drink= drinks.find(items => items.idDrink === nu);
    //alert(article.title);

    return `
    <!-- Product section-->
    <section class="py-5">
        <div class="container px-4 px-lg-5 my-5">
            <div class="row gx-4 gx-lg-5 align-items-center">
                <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src=`+data['drinks'][0]['strDrinkThumb']+` alt="..." /></div>
                <div class="col-md-6">
                    <h1 class="display-5 fw-bolder">`+data['drinks'][0]['strDrink']+`</h1>
                    <div class="fs-5 mb-5">
                        <span>`+data['drinks'][0]['strCategory']+`</span>
                    </div>
                    <h6 class="card-subtitle mb-2 text-muted">Verre : `+data['drinks'][0]['strGlass']+`</h6>
                    <h6 class="card-subtitle mb-2 text-muted">Ingredients : `+data['drinks'][0]['strIngredient1']+`, `+data['drinks'][0]['strIngredient2']+`, `+data['drinks'][0]['strIngredient3']+`, `+data['drinks'][0]['strIngredient4']+`</h6>
                    <p class="lead">`+data['drinks'][0]['strInstructions']+`</p>
                    <div class="d-flex">
                    <a href='/cocktail' class="btn btn-primary">Retour</a>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </section`;
    }
}