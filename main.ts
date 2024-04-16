import {Serie} from './serie.js'; 
import {series} from './data.js';

export const ap = series

let seriesTable: HTMLElement = document.getElementById("infoSeries")!;

let card: HTMLElement= document.getElementById('tarjeta-container')!;

function mostrarDatosSeries(series:Serie[]){

    let total: number = 0;
    let tbodySeries=document.createElement("tbody");
    tbodySeries.innerHTML = '<thead><tr> <th scope="col">#</th> <th scope="col">Name</th> <th scope="col">Channel</th><th scope="col">Seasons</th></tr></thead>'
    tbodySeries.innerHTML+= '<tbody>'
    for (let i = 0; i < series.length; i++) {
        const serie = series[i];
        total+=serie.seasons
        tbodySeries.innerHTML += `
            <tr class="table-active">
                <th scope="row">${serie.numero}</th>
                <td style="color: rgba(11,114,172,255);" >${serie.name}</td>
                <td>${serie.channel}</td>
                <td>${serie.seasons}</td> </tr>`
        tbodySeries.addEventListener("click", function(){
            mostrarTarjetas(i);
        });
        }
    const average = total / series.length;
    tbodySeries.innerHTML += `
        <tr>
            <td colspan="4" style="text-align: left;">Seasons average: ${average}</td>
        </tr>`;
    tbodySeries.innerHTML+= '</tbody>'

    seriesTable.appendChild(tbodySeries);
}


function mostrarTarjetas(i:number){
    const card = `
    <div class="card">
        <div class="card-body" style="width: 18rem;">
            <img class="card-img-top" src="${series[i].image}">
            <div class="card-body">
            <h5 class="card-title">${series[i].name}</h5>
            <p class="card-text">${series[i].description}</p>
            <a href="${series[i].urlInformation}" class="card-link">${series[i].urlInformation}</a>
          </div>
        </div>
    </div>`;
 document.getElementById('tarjeta-container')!.innerHTML = card;
}
console.log(ap)

console.log("hola mundo")

mostrarDatosSeries(series);