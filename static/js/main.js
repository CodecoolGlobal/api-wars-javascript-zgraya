import { dom } from "./dom.js";

function init(){
    let path = window.location.pathname
    if (path === '/'){
        dom.loadPlanets()
    }


}

init()