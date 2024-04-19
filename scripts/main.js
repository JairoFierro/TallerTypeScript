import { series } from './data.js';
export var ap = series;
var seriesTable = document.getElementById("infoSeries");
function mostrarDatosSeries(series) {
    var total = 0;
    var tbodySeries = document.createElement("tbody");
    tbodySeries.innerHTML = '<thead><tr> <th scope="col">#</th> <th scope="col">Name</th> <th scope="col">Channel</th><th scope="col">Seasons</th></tr></thead>';
    var _loop_1 = function (serie) {
        total += serie.seasons;
        var trElement = document.createElement("tr");
        trElement.classList.add("table-active");
        // Crear los elementos td para cada campo de la serie
        var indexTd = document.createElement("td");
        indexTd.textContent = serie.numero.toString();
        var nameTd = document.createElement("td");
        nameTd.style.color = "rgba(11,114,172,255)";
        nameTd.textContent = serie.name;
        // Agregar evento click al nombre de la serie
        nameTd.addEventListener("click", function () { return mostrarTarjetas(serie); });
        var channelTd = document.createElement("td");
        channelTd.textContent = serie.channel;
        var seasonsTd = document.createElement("td");
        seasonsTd.textContent = serie.seasons.toString();
        // Agregar los elementos td al trElement
        trElement.appendChild(indexTd);
        trElement.appendChild(nameTd);
        trElement.appendChild(channelTd);
        trElement.appendChild(seasonsTd);
        // Agregar trElement al tbody
        tbodySeries.appendChild(trElement);
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
    var average = total / series.length;
    var trSeason = document.createElement("tr");
    trSeason.textContent = "Seasons average:" + " " + average.toString();
    tbodySeries.appendChild(trSeason);
    seriesTable.appendChild(tbodySeries);
}
function mostrarTarjetas(serie) {
    var card = "\n    <div class=\"card\">\n        <div class=\"card-body\" style=\"width: 18rem;\">\n            <img class=\"card-img-top\" src=\"".concat(serie.image, "\">\n            <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(serie.name, "</h5>\n            <p class=\"card-text\">").concat(serie.description, "</p>\n            <a href=\"").concat(serie.urlInformation, "\" class=\"card-link\">").concat(serie.urlInformation, "</a>\n          </div>\n        </div>\n    </div>");
    var cardContainer = document.getElementById("tarjeta-container");
    if (!cardContainer) {
        cardContainer = document.createElement("div");
        cardContainer.id = "cardContainer";
        document.body.appendChild(cardContainer);
    }
    cardContainer.innerHTML = card;
}
console.log(ap);
console.log("hola mundo");
mostrarDatosSeries(series);
