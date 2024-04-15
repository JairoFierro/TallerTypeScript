import {Serie} from './serie.js'; 
import {series} from './data.js';

export const ap = series

let seriesTable: HTMLElement = document.getElementById("infoSeries")!;

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
            const card = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${serie.name}</h5>
                    <p class="card-text">Channel: ${serie.channel}</p>
                    <p class="card-text">Seasons: ${serie.seasons}</p>
                    <p class="card-text">Description: ${serie.description}</p>
                </div>
            </div>`;
         document.getElementById('tarjeta-container')!.innerHTML = card;

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


console.log(ap)

console.log("hola mundo")

mostrarDatosSeries(series);