"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../node_modules/bignumber.js/bignumber.d.ts" />
const bignumber_js_1 = require("bignumber.js");
bignumber_js_1.default.config({ ERRORS: false });
class OutsiderFormulas {
    static one(param1) {
        return new bignumber_js_1.default(1);
    }
    static linear01(param1) {
        return new bignumber_js_1.default(param1).mul(0.01);
    }
    static linear05(param1) {
        return new bignumber_js_1.default(param1).mul(0.05);
    }
    static linear1(param1) {
        return new bignumber_js_1.default(param1);
    }
    static linearEzPz(param1) {
        return new bignumber_js_1.default(param1).div(3).ceil();
    }
    static linear2(param1) {
        return new bignumber_js_1.default(param1).mul(2);
    }
    static linear3(param1) {
        return new bignumber_js_1.default(param1).mul(3);
    }
    static linear5(param1) {
        return new bignumber_js_1.default(param1).mul(5);
    }
    static linear10(param1) {
        return new bignumber_js_1.default(param1).mul(10);
    }
    static linear11(param1) {
        return new bignumber_js_1.default(param1).mul(11);
    }
    static linear15(param1) {
        return new bignumber_js_1.default(param1).mul(15);
    }
    static linear20(param1) {
        return new bignumber_js_1.default(param1).mul(20);
    }
    static linear25(param1) {
        return new bignumber_js_1.default(param1).mul(25);
    }
    static linear30(param1) {
        return new bignumber_js_1.default(param1).mul(30);
    }
    static linear35(param1) {
        return new bignumber_js_1.default(param1).mul(35);
    }
    static linear40(param1) {
        return new bignumber_js_1.default(param1).mul(40);
    }
    static linear45(param1) {
        return new bignumber_js_1.default(param1).mul(45);
    }
    static linear50(param1) {
        return new bignumber_js_1.default(param1).mul(50);
    }
    static linear75(param1) {
        return new bignumber_js_1.default(param1).mul(75);
    }
    static linear100(param1) {
        return new bignumber_js_1.default(param1).mul(100);
    }
    static linear0_25(param1) {
        return new bignumber_js_1.default(param1).mul(0.25);
    }
    static linear0_125(param1) {
        return new bignumber_js_1.default(param1).mul(0.125);
    }
    static linear0_10(param1) {
        return new bignumber_js_1.default(param1).mul(0.1);
    }
    static linear10th(param1) {
        return new bignumber_js_1.default(param1).mul(0.1).ceil();
    }
    static percent5(param1) {
        return new bignumber_js_1.default(1).sub(new bignumber_js_1.default(0.95).pow(param1)).mul(100);
    }
    static exponential(param1) {
        return new bignumber_js_1.default(1.5).pow(param1).add(-1).mul(100);
    }
    static cubic(param1) {
        return new bignumber_js_1.default(param1).pow(3).round();
    }
    static ponyboyValue(param1) {
        return new bignumber_js_1.default(param1).pow(2).mul(1000);
    }
    static quadratic(param1) {
        return new bignumber_js_1.default(param1).pow(2);
    }
}
OutsiderFormulas.methods = {
    "one": OutsiderFormulas.one,
    "linear01": OutsiderFormulas.linear01,
    "linear05": OutsiderFormulas.linear05,
    "linear0_10": OutsiderFormulas.linear0_10,
    "linear0_125": OutsiderFormulas.linear0_125,
    "linear0_25": OutsiderFormulas.linear0_25,
    "linear1": OutsiderFormulas.linear1,
    "linear10": OutsiderFormulas.linear10,
    "linear100": OutsiderFormulas.linear100,
    "linear10th": OutsiderFormulas.linear10th,
    "linear11": OutsiderFormulas.linear11,
    "linear15": OutsiderFormulas.linear15,
    "linear2": OutsiderFormulas.linear2,
    "linear20": OutsiderFormulas.linear20,
    "linear25": OutsiderFormulas.linear25,
    "linear3": OutsiderFormulas.linear3,
    "linear30": OutsiderFormulas.linear30,
    "linear35": OutsiderFormulas.linear35,
    "linear40": OutsiderFormulas.linear40,
    "linear45": OutsiderFormulas.linear45,
    "linear5": OutsiderFormulas.linear5,
    "linear50": OutsiderFormulas.linear50,
    "linear75": OutsiderFormulas.linear75,
    "linearEzPz": OutsiderFormulas.linearEzPz,
    "percent5": OutsiderFormulas.percent5,
    "exponential": OutsiderFormulas.exponential,
    "cubic": OutsiderFormulas.cubic,
    "ponyboyValue": OutsiderFormulas.ponyboyValue,
    "quadratic": OutsiderFormulas.quadratic
};
exports.OutsiderFormulas = OutsiderFormulas;
class AncientFormulas {
    static one(param1) {
        return new bignumber_js_1.default(1);
    }
    static onePartialSum(param1) {
        return param1;
    }
    static linear01(param1) {
        return param1.mul(0.01);
    }
    static linear05(param1) {
        return param1.mul(0.05);
    }
    static linear1(param1) {
        return param1;
    }
    static linearEzPz(param1) {
        return param1.div(new bignumber_js_1.default(3)).ceil();
    }
    static linear2(param1) {
        return param1.mul(2);
    }
    static linear3(param1) {
        return param1.mul(3);
    }
    static linear5(param1) {
        return param1.mul(5);
    }
    static linear10(param1) {
        return param1.mul(10);
    }
    static linear11(param1) {
        return param1.mul(11);
    }
    static linear15(param1) {
        return param1.mul(15);
    }
    static linear20(param1) {
        return param1.mul(20);
    }
    static linear25(param1) {
        return param1.mul(25);
    }
    static linear30(param1) {
        return param1.mul(30);
    }
    static linear35(param1) {
        return param1.mul(35);
    }
    static linear40(param1) {
        return param1.mul(40);
    }
    static linear45(param1) {
        return param1.mul(45);
    }
    static linear50(param1) {
        return param1.mul(50);
    }
    static linear100(param1) {
        return param1.mul(100);
    }
    static linear0_25(param1) {
        return param1.mul(0.25);
    }
    static linear(param1, param2) {
        return param1.mul(Number(param2));
    }
    static linearPartialSum(param1, levelCostParams = "1") {
        return param1.mul(param1.add(1)).mul(0.5).mul(Number(levelCostParams));
    }
    static nogardnitValue(param1, bonus = 1) {
        //var _loc2_:BigNumber = (CurrentUser.instance as UserData).outsiders.idleBonus.mul(0.01).add(1);
        return param1.mul(10).mul(bonus);
    }
    static kumaValue(param1, levelAmountParams, bonus = 1) {
        var _loc3_ = AncientFormulas.diminishingReturns(param1, levelAmountParams);
        return _loc3_.mul(bonus);
    }
    static atmanValue(param1, levelAmountParams, bonus = 1) {
        var _loc3_ = AncientFormulas.diminishingReturns(param1, levelAmountParams);
        return _loc3_.mul(bonus);
    }
    static bubosValue(param1, levelAmountParams, bonus = 1) {
        var _loc3_ = AncientFormulas.diminishingReturns(param1, levelAmountParams);
        return _loc3_.mul(bonus);
    }
    static chronosValue(param1, levelAmountParams, bonus = 1) {
        var _loc3_ = AncientFormulas.diminishingReturns(param1, levelAmountParams);
        return _loc3_.mul(bonus);
    }
    static doraValue(param1, levelAmountParams, bonus = 1) {
        var _loc3_ = AncientFormulas.diminishingReturns(param1, levelAmountParams);
        return _loc3_.mul(bonus);
    }
    static exponential(param1, param2) {
        var power = Number(param2);
        return new bignumber_js_1.default(Math.pow(power, param1.toNumber()));
    }
    static exponentialPartialSum(param1) {
        return new bignumber_js_1.default(2).pow(param1.add(1).toNumber()).add(-2);
    }
    static diminishingReturns(param1, levelAmountParams) {
        var params = levelAmountParams.split(",");
        var p1 = Number(params[0]);
        var p2 = Number(params[1]);
        return new bignumber_js_1.default(p1 * (1 - Math.exp(p2 * param1.toNumber())));
    }
    static polynomial1_5(param1) {
        return param1.mul(param1.sqrt()).ceil();
    }
    static polynomial1_5PartialSum(param1) {
        param1 = param1.add(1);
        var _loc2_ = param1.sqrt();
        var _loc3_ = param1.mul(_loc2_);
        var _loc4_ = param1.mul(_loc3_).mul(0.4);
        var _loc5_ = _loc3_.mul(0.5);
        var _loc6_ = _loc2_.mul(0.125);
        var _loc7_ = new bignumber_js_1.default(0.00052).div(_loc3_);
        return _loc4_.sub(_loc5_).add(_loc6_).sub(_loc7_).ceil();
    }
    static quadratic(param1) {
        return param1.pow(2);
    }
    static quadraticPartialSum(param1) {
        return param1.mul(param1.add(1)).mul(param1.mul(2).add(1)).mul(1 / 6);
    }
    static cubic(param1) {
        return param1.pow(3);
    }
    static solomonRewards(param1) {
        if (param1.lessThan(20)) {
            return param1.mul(5);
        }
        if (param1.lessThan(40)) {
            return param1.sub(new bignumber_js_1.default(20)).mul(4).add(100);
        }
        if (param1.lessThan(60)) {
            return param1.sub(new bignumber_js_1.default(40)).mul(3).add(180);
        }
        if (param1.lessThan(80)) {
            return param1.sub(new bignumber_js_1.default(60)).mul(2).add(240);
        }
        return param1.sub(new bignumber_js_1.default(80)).add(280);
    }
    static libAndSiy(param1, bonus = 1) {
        if (param1.lessThan(10)) {
            return param1.mul(25).mul(bonus);
        }
        if (param1.lessThan(20)) {
            return param1.sub(new bignumber_js_1.default(9)).mul(24).add(225).mul(bonus);
        }
        if (param1.lessThan(30)) {
            return param1.sub(new bignumber_js_1.default(19)).mul(23).add(465).mul(bonus);
        }
        if (param1.lessThan(40)) {
            return param1.sub(new bignumber_js_1.default(29)).mul(22).add(695).mul(bonus);
        }
        if (param1.lessThan(50)) {
            return param1.sub(new bignumber_js_1.default(39)).mul(21).add(915).mul(bonus);
        }
        if (param1.lessThan(60)) {
            return param1.sub(new bignumber_js_1.default(49)).mul(20).add(1125).mul(bonus);
        }
        if (param1.lessThan(70)) {
            return param1.sub(new bignumber_js_1.default(59)).mul(19).add(1325).mul(bonus);
        }
        if (param1.lessThan(80)) {
            return param1.sub(new bignumber_js_1.default(69)).mul(18).add(1515).mul(bonus);
        }
        if (param1.lessThan(90)) {
            return param1.sub(new bignumber_js_1.default(79)).mul(17).add(1695).mul(bonus);
        }
        if (param1.lessThan(100)) {
            return param1.sub(new bignumber_js_1.default(89)).mul(16).add(1865).mul(bonus);
        }
        return param1.sub(new bignumber_js_1.default(99)).mul(15).add(2025).mul(bonus);
    }
    static quadraticSolomon(param1) {
        if (param1 < 20) {
            return Math.round(Math.pow(param1, 1.5));
        }
        return Math.round(Math.pow(20, 1.5)) + Math.round(Math.pow(param1 - 20, 3));
    }
}
AncientFormulas.methods = {
    "one": AncientFormulas.one,
    "onePartialSum": AncientFormulas.onePartialSum,
    "linear01": AncientFormulas.linear01,
    "linear05": AncientFormulas.linear05,
    "linear1": AncientFormulas.linear1,
    "linearEzPz": AncientFormulas.linearEzPz,
    "linear2": AncientFormulas.linear2,
    "linear3": AncientFormulas.linear3,
    "linear5": AncientFormulas.linear5,
    "linear10": AncientFormulas.linear10,
    "linear11": AncientFormulas.linear11,
    "linear15": AncientFormulas.linear15,
    "linear20": AncientFormulas.linear20,
    "linear25": AncientFormulas.linear25,
    "linear30": AncientFormulas.linear30,
    "linear35": AncientFormulas.linear35,
    "linear40": AncientFormulas.linear40,
    "linear45": AncientFormulas.linear45,
    "linear50": AncientFormulas.linear50,
    "linear100": AncientFormulas.linear100,
    "linear0_25": AncientFormulas.linear0_25,
    "linear": AncientFormulas.linear,
    "linearPartialSum": AncientFormulas.linearPartialSum,
    "nogardnitValue": AncientFormulas.nogardnitValue,
    "kumaValue": AncientFormulas.kumaValue,
    "atmanValue": AncientFormulas.atmanValue,
    "bubosValue": AncientFormulas.bubosValue,
    "chronosValue": AncientFormulas.chronosValue,
    "doraValue": AncientFormulas.doraValue,
    "exponential": AncientFormulas.exponential,
    "exponentialPartialSum": AncientFormulas.exponentialPartialSum,
    "diminishingReturns": AncientFormulas.diminishingReturns,
    "polynomial1_5": AncientFormulas.polynomial1_5,
    "polynomial1_5PartialSum": AncientFormulas.polynomial1_5PartialSum,
    "quadratic": AncientFormulas.quadratic,
    "quadraticPartialSum": AncientFormulas.quadraticPartialSum,
    "cubic": AncientFormulas.cubic,
    "solomonRewards": AncientFormulas.solomonRewards,
    "libAndSiy": AncientFormulas.libAndSiy,
    "quadraticSolomon": AncientFormulas.quadraticSolomon
};
exports.AncientFormulas = AncientFormulas;
//# sourceMappingURL=formulas.js.map