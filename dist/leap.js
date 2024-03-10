"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLeap = void 0;
function isLeap(anio) {
    if ((anio % 4 == 0 && anio % 100 !== 0) || (anio % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}
exports.isLeap = isLeap;
console.log(isLeap(1960));
//# sourceMappingURL=leap.js.map