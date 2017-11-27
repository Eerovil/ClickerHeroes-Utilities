"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../node_modules/bignumber.js/bignumber.d.ts" />
const bignumber_js_1 = require("bignumber.js");
bignumber_js_1.default.config({ ERRORS: false });
const formulas_1 = require("./formulas");
const data = require("../static/data.json");
class Ancient {
    constructor(id) {
        this.id = id;
        let s = data.ancients[this.id];
        for (var key in s) {
            this[key] = s[key];
        }
    }
    getBonusAmountForLevel(level) {
        if (typeof (level) == "number") {
            level = new bignumber_js_1.default(level);
        }
        let func = formulas_1.AncientFormulas.methods[this.levelAmountFormula];
        if (this.levelAmountParams) {
            return func(level, this.levelAmountParams);
        }
        return func(level);
    }
    getCostUpToLevel(targetLevel, startingLevel = 0, ancientCostModifier = 1) {
        if (typeof (targetLevel) == "number") {
            targetLevel = new bignumber_js_1.default(targetLevel);
        }
        if (typeof (startingLevel) == "number") {
            startingLevel = new bignumber_js_1.default(startingLevel);
        }
        let func = formulas_1.AncientFormulas.methods[this.levelCostFormula + "PartialSum"];
        let ret = func(targetLevel).sub(func(startingLevel));
        if (ret.lessThan(0)) {
            ret = new bignumber_js_1.default("10e1e300");
        }
        ret = ret.mul(ancientCostModifier).ceil();
        return ret;
    }
}
exports.Ancient = Ancient;
//# sourceMappingURL=ancients.js.map