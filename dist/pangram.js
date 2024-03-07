"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPangram = void 0;
function isPangram(ora) {
    console.log(ora);
    var loweCase = ora.toLocaleLowerCase();
    console.log(loweCase);
    var otroOra = loweCase.split(" ");
    console.log(otroOra);
    ora = "";
    for (let index = 0; index < otroOra.length; index++) {
        ora += otroOra[index];
    }
    otroOra = ora.split("");
    var oracion = otroOra.sort();
    console.log(oracion);
    let pangram = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    let oraIndex = 0;
    let index = 0;
    var siEs = false;
    for (index; index < pangram.length;) {
        if (pangram[index] == oracion[oraIndex]) {
            console.log(pangram[index], oracion[oraIndex], index, oraIndex);
            index++;
            siEs = true;
        }
        else {
            oraIndex++;
            siEs = false;
            if (oraIndex > 1000) {
                break;
            }
        }
    }
    return siEs;
}
exports.isPangram = isPangram;
var ora = "Five quacking Zephyrs jolt my wax bed";
ora.toLocaleLowerCase;
console.log(isPangram(ora));
//# sourceMappingURL=pangram.js.map