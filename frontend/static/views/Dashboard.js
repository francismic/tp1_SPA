import AbstractView from "./AbstractView.js";

    export default class extends AbstractView { 
        constructor(params) {
        super(params);
        this.setTitle("Dashboard");
        }

        async getHtml() {
            async function getData(url) {
            const response = await fetch(url);
           
            return response.json();
            }
           
            const data = await getData('/static/views/drink.json');
            console.log(data);
    
                return `
                <!-- Hero -->
            
                 <div class="mask container">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="text-center">
                        <h1 class="mb-3 text-center">Les meilleurs cocktails en ville!</h1>
                        <h4 class="mb-3 text-center">Découvrer notre sélection de cocktail pour pimenter vos soirée!</h4>
                        <a class="btn btn-outline-dark btn-lg text-center" href="/cocktail" role="button">Voir les cocktails</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Hero -->
                    `;
            }
        }
