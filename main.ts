import {Serie} from './serie.js'; 
import {series} from './data.js';

export const ap = series

let seriesTable: HTMLElement = document.getElementById("infoSeries")!;


function mostrarDatosSeries(series:Serie[]){

    let total: number = 0;
    let tbodySeries=document.createElement("tbody");


    tbodySeries.innerHTML = '<thead><tr> <th scope="col">#</th> <th scope="col">Name</th> <th scope="col">Channel</th><th scope="col">Seasons</th></tr></thead>'


    for (let serie of series) {
        total+=serie.seasons
        let trElement: HTMLElement = document.createElement("tr");
        trElement.classList.add("table-active");

        // Crear los elementos td para cada campo de la serie
        let indexTd = document.createElement("td");
        indexTd.textContent = serie.numero.toString();

        let nameTd = document.createElement("td");
        nameTd.style.color = "rgba(11,114,172,255)"; 
        nameTd.textContent = serie.name;
        // Agregar evento click al nombre de la serie
        nameTd.addEventListener("click", () => mostrarTarjetas(serie));

        let channelTd = document.createElement("td");
        channelTd.textContent = serie.channel;

        let seasonsTd = document.createElement("td");
        seasonsTd.textContent = serie.seasons.toString();

        // Agregar los elementos td al trElement
        trElement.appendChild(indexTd);
        trElement.appendChild(nameTd);
        trElement.appendChild(channelTd);
        trElement.appendChild(seasonsTd);

        // Agregar trElement al tbody
        tbodySeries.appendChild(trElement);
        
    }
    const average = total / series.length;


    let trSeason = document.createElement("tr");
    trSeason.textContent = "Seasons average:" + " " + average.toString();
    tbodySeries.appendChild(trSeason);


    seriesTable.appendChild(tbodySeries);
}


function mostrarTarjetas(serie:Serie){
    const card = `
    <div class="card">
        <div class="card-body" style="width: 18rem;">
            <img class="card-img-top" src="${serie.image}">
            <div class="card-body">
            <h5 class="card-title">${serie.name}</h5>
            <p class="card-text">${serie.description}</p>
            <a href="${serie.urlInformation}" class="card-link">${serie.urlInformation}</a>
          </div>
        </div>
    </div>`;

    let cardContainer = document.getElementById("tarjeta-container");
    if (!cardContainer) {
        cardContainer = document.createElement("div");
        cardContainer.id = "cardContainer";
        document.body.appendChild(cardContainer);
    }
    cardContainer.innerHTML = card;
}
console.log(ap)

mostrarDatosSeries(series);