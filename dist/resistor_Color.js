"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLORS = exports.colorCode = void 0;
const colorCode = (color) => {
    let colores = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
    for (let index = 0; index < colores.length; index++) {
        if (color == (colores[index]))
            return index;
    }
    if (color == ('colors')) {
        return colores;
    }
    else {
        return 0;
    }
};
exports.colorCode = colorCode;
exports.COLORS = (0, exports.colorCode)('colors');
//# sourceMappingURL=resistor_Color.js.map