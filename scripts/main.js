import { series } from './data.js';
export var ap = series;
var seriesTable = document.getElementById("infoSeries");
var card = document.getElementById('tarjeta-container');
function mostrarDatosSeries(series) {
    var total = 0;
    var tbodySeries = document.createElement("tbody");
    tbodySeries.innerHTML = '<thead><tr> <th scope="col">#</th> <th scope="col">Name</th> <th scope="col">Channel</th><th scope="col">Seasons</th></tr></thead>';
    tbodySeries.innerHTML += '<tbody>';
    var _loop_1 = function (i) {
        var serie = series[i];
        total += serie.seasons;
        tbodySeries.innerHTML += "\n            <tr class=\"table-active\">\n                <th scope=\"row\">".concat(serie.numero, "</th>\n                <td style=\"color: rgba(11,114,172,255);\" >").concat(serie.name, "</td>\n                <td>").concat(serie.channel, "</td>\n                <td>").concat(serie.seasons, "</td> </tr>");
        tbodySeries.addEventListener("click", function () {
            mostrarTarjetas(i);
        });
    };
    for (var i = 0; i < series.length; i++) {
        _loop_1(i);
    }
    var average = total / series.length;
    tbodySeries.innerHTML += "\n        <tr>\n            <td colspan=\"4\" style=\"text-align: left;\">Seasons average: ".concat(average, "</td>\n        </tr>");
    tbodySeries.innerHTML += '</tbody>';
    seriesTable.appendChild(tbodySeries);
}
function mostrarTarjetas(i) {
    var card = "\n    <div class=\"card\">\n        <div class=\"card-body\" style=\"width: 18rem;\">\n            <img class=\"card-img-top\" src=\"".concat(series[i].image, "\">\n            <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(series[i].name, "</h5>\n            <p class=\"card-text\">").concat(series[i].description, "</p>\n            <a href=\"").concat(series[i].urlInformation, "\" class=\"card-link\">").concat(series[i].urlInformation, "</a>\n          </div>\n        </div>\n    </div>");
    document.getElementById('tarjeta-container').innerHTML = card;
}
console.log(ap);
console.log("hola mundo");
mostrarDatosSeries(series);
