import { series } from './data.js';
export var ap = series;
var seriesTable = document.getElementById("infoSeries");
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
            var card = "\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">".concat(serie.name, "</h5>\n                    <p class=\"card-text\">Channel: ").concat(serie.channel, "</p>\n                    <p class=\"card-text\">Seasons: ").concat(serie.seasons, "</p>\n                    <p class=\"card-text\">Description: ").concat(serie.description, "</p>\n                </div>\n            </div>");
            document.getElementById('tarjeta-container').innerHTML = card;
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
console.log(ap);
console.log("hola mundo");
mostrarDatosSeries(series);
