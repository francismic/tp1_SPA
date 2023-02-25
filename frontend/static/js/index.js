import Dashboard from "../views/Dashboard.js";
import Cocktail from "../views/Cocktail.js";
import Settings from "../views/Settings.js";
import DrinkView from "../views/DrinkView.js"


const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
    return [key, values[i]];
    }));
};

// 1 router
    const router = async () => {
    const routes = [
        { path: "/index", view:Dashboard},
        { path: "/cocktail", view:Cocktail},
        { path: "/cocktail-view/:idDrink", view:DrinkView},
        { path: "/settings", view:Settings},
        ]

// 2 match function
const potentialMatches = routes.map(route => {
    return{
        route: route,
        //isMatch: location.pathname === route.path
        result: location.pathname.match(pathToRegex(route.path))
        }
    })

    let match = potentialMatches.find(potentialMatches => potentialMatches.result != null)

    if(!match) {
        match = {
        route: routes[0],
        result: [location.pathname]
        }
    }
    //console.log(match);
    const view = new match.route.view(getParams(match));
    document.querySelector("#app").innerHTML = await view.getHtml();
}

    const navigateTo = url => {
        history.pushState(null, null, url);
        router();
    }

    window.addEventListener("popstate", router);
    document.addEventListener("DOMContentLoaded", () => {
        document.body.addEventListener("click", e => {
            if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href)
            }
        })
    router();
});
       
       