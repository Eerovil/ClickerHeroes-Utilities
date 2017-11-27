/// <reference path="../../node_modules/bignumber.js/bignumber.d.ts" />
import BigNumber from "bignumber.js";
BigNumber.config({ ERRORS: false });

import {AncientFormulas} from "./formulas"

import * as data from '../static/data.json';


export class Ancient {


    public iconId:             number
    public levelCostFormula:   string
    public levelCostParams:    number
    public maxLevel:           number
    public effectDescription:  string
    public name:               string
    public itemSuffix:         string
    public flavorText:         string
    public id:                 number
    public levelAmountFormula: string
    public levelAmountParams?: string 
    public paramName:          string

    constructor(id:number) {
        this.id = id;
        let s = (<any>data).ancients[this.id];
        for (var key in s) {
            this[key] = s[key];
        }
    }


    public getBonusAmountForLevel(level : BigNumber | number) : BigNumber {
        if (typeof(level) == "number") {
            level = new BigNumber(level);
        }
        let func : Function = AncientFormulas.methods[this.levelAmountFormula];
        if(this.levelAmountParams) {
            return func(level,this.levelAmountParams);
        }
        return func(level);
    }

    public getCostUpToLevel(targetLevel : BigNumber | number, 
        startingLevel : BigNumber | number = 0, 
        ancientCostModifier = 1 ) : BigNumber {
        if (typeof(targetLevel) == "number") {
            targetLevel = new BigNumber(targetLevel);
        }
        if (typeof(startingLevel) == "number") {
            startingLevel = new BigNumber(startingLevel);
        }
        let func : Function =  AncientFormulas.methods[this.levelCostFormula + "PartialSum"];
        let ret = (<BigNumber>func(targetLevel)).sub(func(startingLevel))

        if (ret.lessThan(0)) {
            ret = new BigNumber("10e1e300");
        }
        ret = ret.mul(ancientCostModifier).ceil();

        return ret;
        
    }
}