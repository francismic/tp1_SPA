import AbstractView from "./AbstractView.js";

    export default class extends AbstractView {
        constructor(params) {
        super(params);
        this.setTitle("Settings");
    }

    async getHtml() {
        return `         
        <div class="mask container">
           <div class="d-flex justify-content-center align-items-center">
               <div class="text-center">
               <h1 class="mb-3 text-center">Settings</h1>
               <h4 class="mb-3 text-center">Gérez votre confidentialité et votre configuration</h4>
         </div>
       </div>
     </div>
   </div>
        `;
    }
}
