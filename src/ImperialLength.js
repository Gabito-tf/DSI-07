"use strict";
exports.__esModule = true;
exports.ImperialLength = void 0;
/**
 * Clase imperial para medidas
 *
 * @export
 * @class ImperialLength
 */
var ImperialLength = /** @class */ (function () {
    /**
     * Creates an instance of ImperialLength.
     * @param {number} yardas en yardas
     * @memberof ImperialLength
     */
    function ImperialLength(yardas) {
        this.yardas = yardas;
    }
    /**
     * Recibe pulgadas, y guarda su equivalente en yardas
     *
     * @param {number} pulgadas
     * @memberof ImperialLength
     */
    ImperialLength.prototype.setPulgadas = function (pulgadas) {
        this.yardas = pulgadas * 0.0277778;
    };
    /**
     * Retorna las yardas en forma de pulgadas
     *
     * @return {*}
     * @memberof ImperialLength
     */
    ImperialLength.prototype.getPulgadas = function () {
        return this.yardas * 36;
    };
    /**
     * Recibe pies, y guarda su equivalente en yardas
     *
     * @param {number} pies
     * @memberof ImperialLength
     */
    ImperialLength.prototype.setPies = function (pies) {
        this.yardas = pies * 0.3333333;
    };
    /**
     * Retorna las yardas en forma de pies.
     *
     * @return {*}
     * @memberof ImperialLength
     */
    ImperialLength.prototype.getPies = function () {
        return this.yardas * 3;
    };
    /**
     * Retorna las yardas
     *
     * @return {*}
     * @memberof ImperialLength
     */
    ImperialLength.prototype.getYardas = function () {
        return this.yardas;
    };
    /**
     * Recibe millas, y guarda su equivalente en yardas
     *
     * @param {number} millas
     * @memberof ImperialLength
     */
    ImperialLength.prototype.setMillas = function (millas) {
        this.yardas = millas * 1760;
    };
    /**
     * Retorna las yardas, en forma de millas.
     *
     * @return {*}
     * @memberof ImperialLength
     */
    ImperialLength.prototype.getMillas = function () {
        return this.yardas * 0.000568182;
    };
    return ImperialLength;
}());
exports.ImperialLength = ImperialLength;
