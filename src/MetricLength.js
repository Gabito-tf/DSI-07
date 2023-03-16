"use strict";
exports.__esModule = true;
exports.MetricLength = void 0;
/**
 * Clase que trabaja con las unidades de medida del sistema metrico
 *
 * @export
 * @class MetricLength
 */
var MetricLength = /** @class */ (function () {
    /**
     * Creates an instance of MetricLength.
     * @param {number} metros
     * @memberof MetricLength
     */
    function MetricLength(metros) {
        this.metros = metros;
    }
    /**
     * Recibe una cantidad en centimetros, y la guarda en metros.
     *
     * @param {number} centimetros
     * @memberof MetricLength
     */
    MetricLength.prototype.setCentimetros = function (centimetros) {
        this.metros = centimetros * 0.01;
    };
    /**
     * Retorna los metros en formato centimetros
     *
     * @return {*}
     * @memberof MetricLength
     */
    MetricLength.prototype.getCentimetros = function () {
        return this.metros * 100;
    };
    /**
     * Recibe una cantidad de kilometros, y la guarda en metros
     *
     * @param {number} kilometros
     * @memberof MetricLength
     */
    MetricLength.prototype.setKilometros = function (kilometros) {
        this.metros = kilometros * 1000;
    };
    /**
     * Retorna los metros en formato kilometros
     *
     * @return {*}
     * @memberof MetricLength
     */
    MetricLength.prototype.getKilometros = function () {
        return this.metros * 0.001;
    };
    /**
     * Retorna los metros
     *
     * @return {*}
     * @memberof MetricLength
     */
    MetricLength.prototype.getMetros = function () {
        return this.metros;
    };
    return MetricLength;
}());
exports.MetricLength = MetricLength;
