"use strict";
exports.__esModule = true;
exports.Adaptee = void 0;
var Adaptee = /** @class */ (function () {
    function Adaptee() {
    }
    Adaptee.prototype.fromYardasToMeters = function (yardas) {
        return yardas * 0.9144;
    };
    return Adaptee;
}());
exports.Adaptee = Adaptee;
