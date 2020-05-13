import { dataHandler } from "./data_handler.js";

export let dom = {
    loadPlanets: function (){
        dataHandler.getPlanets('https://swapi.dev/api/planets/',function(planets){
            dom.showPlanets(planets);
        });
    },
    loadNextPlanets: function (){
        let nextButton = document.getElementById('next');
        let link = nextButton.getAttribute('value');
        if (link != null){
            dataHandler.getPlanets(link, function(planets){
            dom.showPlanets(planets);
        })

        };
    },
    loadPreviousPlanets: function (){
        let previousButton = document.getElementById('previus');
        let link = previousButton.getAttribute('value');
        if (link != null){
            dataHandler.getPlanets(link, function (planets) {
            dom.showPlanets(planets);
        })
        };

    },
    formatNumber: function(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')},

    showPlanets: function(planets) {
        let next = planets.next;
        let previous = planets.previous;
        let planetList = '';
        let planetsData = planets.results;
        console.log(planetsData);
        for (let planet of planetsData) {
            let planet_name = planet.name;
            let diameter = planet.diameter;
            let climate = planet.climate;
            let terrain = planet.terrain;
            let surface_water = planet.surface_water;
            let population = planet.population;
            let residents = planet.residents.length;

            planetList += `
                <tr>
                    <td>${planet_name}</td>
                    <td>${dom.formatNumber(diameter)}</td>
                    <td>${climate}</td>
                    <td>${terrain}</td>
                    <td>${surface_water}</td>
                    <td>${dom.formatNumber(population)}</td>
                    <td>
                        <button type="button" class="btn btn-primary mojemodale" data-toggle="modal" data-target="#examplemodal">
                        ${residents}</button>                                       
                    </td>
                </tr>
            `
        }
        document.getElementById('rows').innerHTML = '';
        let dataRow = document.getElementById('rows')
        dataRow.insertAdjacentHTML('beforeend', planetList);

        let previousButton = document.getElementById('previus');
        previousButton.setAttribute('value', previous)
        let nextButton = document.getElementById('next');
        nextButton.setAttribute('value', next)

        previousButton.addEventListener('click', dom.loadPreviousPlanets);
        nextButton.addEventListener('click', dom.loadNextPlanets);

        let modalButtons = document.getElementsByClassName('mojemodale');
        for ( let button of modalButtons){
            button.addEventListener('click', dom.magia);
        }



    },
    magia: function (){
        let modal = document.getElementById('exampleModal');
        modal.style.display = 'block';

    }






}