import AbstractView from "./AbstractView.js";

    export default class extends AbstractView {
        constructor(params) {
        super(params);
        this.setTitle("Cocktails");
    }

    async getHtml() {
        async function getData(url) {
        const response = await fetch(url);
       
        return response.json();
        }
       
        const data = await getData('/static/views/drink.json');
        console.log(data);
       
        let listDrinks =``;
            for(let i in data['drinks']){
                listDrinks +=`
                <div class="card m-3" style="width: 18rem;">
                <img src=`+data['drinks'][i]['strDrinkThumb']+` class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">`+data['drinks'][i]['strDrink']+`</h5>
                <h6 class="card-subtitle mb-2 text-muted">`+data['drinks'][i]['strCategory']+`</h6>
                <a href='/cocktail-view/`+data['drinks'][i]['idDrink']+`' class="btn btn-primary">Voir recette</a>
                </div>
                </div>
              `
            }

            return `
            <div class="container text-center">
            <div class="row">`
              +listDrinks;
        }
    }