"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverse = void 0;
function reverse(oracion) {
    var oracion2 = oracion.split("");
    oracion = "";
    for (let index = oracion2.length - 1; index >= 0; index--) {
        oracion += oracion2[index];
    }
    return oracion;
}
exports.reverse = reverse;
console.log(reverse("edgar"));
//# sourceMappingURL=reverse_string.js.map