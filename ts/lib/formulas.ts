/// <reference path="../../node_modules/bignumber.js/bignumber.d.ts" />
import BigNumber from "bignumber.js";
BigNumber.config({ ERRORS: false });

export class OutsiderFormulas {

    public static methods = {
        "one":          OutsiderFormulas.one,
        "linear01":     OutsiderFormulas.linear01,
        "linear05":     OutsiderFormulas.linear05,
        "linear0_10":   OutsiderFormulas.linear0_10,
        "linear0_125":  OutsiderFormulas.linear0_125,
        "linear0_25":   OutsiderFormulas.linear0_25,
        "linear1":      OutsiderFormulas.linear1,
        "linear10":     OutsiderFormulas.linear10,
        "linear100":    OutsiderFormulas.linear100,
        "linear10th":   OutsiderFormulas.linear10th,
        "linear11":     OutsiderFormulas.linear11,
        "linear15":     OutsiderFormulas.linear15,
        "linear2":      OutsiderFormulas.linear2,
        "linear20":     OutsiderFormulas.linear20,
        "linear25":     OutsiderFormulas.linear25,
        "linear3":      OutsiderFormulas.linear3,
        "linear30":     OutsiderFormulas.linear30,
        "linear35":     OutsiderFormulas.linear35,
        "linear40":     OutsiderFormulas.linear40,
        "linear45":     OutsiderFormulas.linear45,
        "linear5":      OutsiderFormulas.linear5,
        "linear50":     OutsiderFormulas.linear50,
        "linear75":     OutsiderFormulas.linear75,
        "linearEzPz":   OutsiderFormulas.linearEzPz,
        "percent5":     OutsiderFormulas.percent5,
        "exponential":  OutsiderFormulas.exponential,
        "cubic":        OutsiderFormulas.cubic,
        "ponyboyValue": OutsiderFormulas.ponyboyValue,
        "quadratic":    OutsiderFormulas.quadratic

    }

    public static one(param1:number) : BigNumber
    {
        return new BigNumber(1);
    }
    
    public static linear01(param1:number) : BigNumber
    {
        return new BigNumber(param1).mul(0.01);
    }
    
    public static linear05(param1:number) : BigNumber
    {
        return new BigNumber(param1).mul(0.05);
    }
    
    public static linear1(param1:number) : BigNumber
    {
        return new BigNumber(param1);
    }
    
    public static linearEzPz(param1:number) : BigNumber
    {
        return new BigNumber(param1).div(3).ceil();
    }
    
    public static linear2(param1:number) : BigNumber
    {
        return new BigNumber(param1).mul(2);
    }
    
    public static linear3(param1:number) : BigNumber
    {
        return new BigNumber(param1).mul(3);
    }
    
    public static linear5(param1:number) : BigNumber
    {
        return new BigNumber(param1).mul(5);
    }
    
    public static linear10(param1:number) : BigNumber
    {
        return new BigNumber(param1).mul(10);
    }
    
    public static linear11(param1:number) : BigNumber
    {
        return new BigNumber(param1).mul(11);
    }
    
    public static linear15(param1:number) : BigNumber
    {
        return new BigNumber(param1).mul(15);
    }
    
    public static linear20(param1:number) : BigNumber
    {
        return new BigNumber(param1).mul(20);
    }
    
    public static linear25(param1:number) : BigNumber
    {
        return new BigNumber(param1).mul(25);
    }
    
    public static linear30(param1:number) : BigNumber
    {
        return new BigNumber(param1).mul(30);
    }
    
    public static linear35(param1:number) : BigNumber
    {
        return new BigNumber(param1).mul(35);
    }
    
    public static linear40(param1:number) : BigNumber
    {
        return new BigNumber(param1).mul(40);
    }
    
    public static linear45(param1:number) : BigNumber
    {
        return new BigNumber(param1).mul(45);
    }
    
    public static linear50(param1:number) : BigNumber
    {
        return new BigNumber(param1).mul(50);
    }
    
    public static linear75(param1:number) : BigNumber
    {
        return new BigNumber(param1).mul(75);
    }
    
    public static linear100(param1:number) : BigNumber
    {
        return new BigNumber(param1).mul(100);
    }
    
    public static linear0_25(param1:number) : BigNumber
    {
        return new BigNumber(param1).mul(0.25);
    }
    
    public static linear0_125(param1:number) : BigNumber
    {
        return new BigNumber(param1).mul(0.125);
    }
    
    public static linear0_10(param1:number) : BigNumber
    {
        return new BigNumber(param1).mul(0.1);
    }
    
    public static linear10th(param1:number) : BigNumber
    {
        return new BigNumber(param1).mul(0.1).ceil();
    }
    
    public static percent5(param1:number) : BigNumber
    {
        return new BigNumber(1).sub(new BigNumber(0.95).pow(param1)).mul(100);
    }
    
    public static exponential(param1:number) : BigNumber
    {
        return new BigNumber(1.5).pow(param1).add(-1).mul(100);
    }
    
    public static cubic(param1:number) : BigNumber
    {
        return new BigNumber(param1).pow(3).round();
    }
    
    public static ponyboyValue(param1:number) : BigNumber
    {
        return new BigNumber(param1).pow(2).mul(1000);
    }
    
    public static quadratic(param1:number) : BigNumber
    {
        return new BigNumber(param1).pow(2);
    }

}

export class AncientFormulas {
    
        public static methods = {
            "one":              AncientFormulas.one,
            "onePartialSum":    AncientFormulas.onePartialSum,
            "linear01":         AncientFormulas.linear01,
            "linear05":         AncientFormulas.linear05,
            "linear1":          AncientFormulas.linear1,
            "linearEzPz":       AncientFormulas.linearEzPz,
            "linear2":          AncientFormulas.linear2,
            "linear3":          AncientFormulas.linear3,
            "linear5":          AncientFormulas.linear5,
            "linear10":         AncientFormulas.linear10,
            "linear11":         AncientFormulas.linear11,
            "linear15":         AncientFormulas.linear15,
            "linear20":         AncientFormulas.linear20,
            "linear25":         AncientFormulas.linear25,
            "linear30":         AncientFormulas.linear30,
            "linear35":         AncientFormulas.linear35,
            "linear40":         AncientFormulas.linear40,
            "linear45":         AncientFormulas.linear45,
            "linear50":         AncientFormulas.linear50,
            "linear100":        AncientFormulas.linear100,
            "linear0_25":       AncientFormulas.linear0_25,
            "linear":           AncientFormulas.linear,
            "linearPartialSum": AncientFormulas.linearPartialSum,
            "nogardnitValue":   AncientFormulas.nogardnitValue,
            "kumaValue":        AncientFormulas.kumaValue,
            "atmanValue":       AncientFormulas.atmanValue,
            "bubosValue":       AncientFormulas.bubosValue,
            "chronosValue":     AncientFormulas.chronosValue,
            "doraValue":        AncientFormulas.doraValue,
            "exponential":      AncientFormulas.exponential,
            "exponentialPartialSum":    AncientFormulas.exponentialPartialSum,
            "diminishingReturns":       AncientFormulas.diminishingReturns,
            "polynomial1_5":            AncientFormulas.polynomial1_5,
            "polynomial1_5PartialSum":  AncientFormulas.polynomial1_5PartialSum,
            "quadratic":                AncientFormulas.quadratic,
            "quadraticPartialSum":      AncientFormulas.quadraticPartialSum,
            "cubic":            AncientFormulas.cubic,
            "solomonRewards":   AncientFormulas.solomonRewards,
            "libAndSiy":        AncientFormulas.libAndSiy,
            "quadraticSolomon": AncientFormulas.quadraticSolomon
    
        }

    public static one(param1:BigNumber) : BigNumber
    {
       return new BigNumber(1);
    }
    
    public static onePartialSum(param1:BigNumber) : BigNumber
    {
       return param1;
    }
    
    public static linear01(param1:BigNumber) : BigNumber
    {
       return param1.mul(0.01);
    }
    
    public static linear05(param1:BigNumber) : BigNumber
    {
       return param1.mul(0.05);
    }
    
    public static linear1(param1:BigNumber) : BigNumber
    {
       return param1;
    }
    
    public static linearEzPz(param1:BigNumber) : BigNumber
    {
       return param1.div(new BigNumber(3)).ceil();
    }
    
    public static linear2(param1:BigNumber) : BigNumber
    {
       return param1.mul(2);
    }
    
    public static linear3(param1:BigNumber) : BigNumber
    {
       return param1.mul(3);
    }
    
    public static linear5(param1:BigNumber) : BigNumber
    {
       return param1.mul(5);
    }
    
    public static linear10(param1:BigNumber) : BigNumber
    {
       return param1.mul(10);
    }
    
    public static linear11(param1:BigNumber) : BigNumber
    {
       return param1.mul(11);
    }
    
    public static linear15(param1:BigNumber) : BigNumber
    {
       return param1.mul(15);
    }
    
    public static linear20(param1:BigNumber) : BigNumber
    {
       return param1.mul(20);
    }
    
    public static linear25(param1:BigNumber) : BigNumber
    {
       return param1.mul(25);
    }
    
    public static linear30(param1:BigNumber) : BigNumber
    {
       return param1.mul(30);
    }
    
    public static linear35(param1:BigNumber) : BigNumber
    {
       return param1.mul(35);
    }
    
    public static linear40(param1:BigNumber) : BigNumber
    {
       return param1.mul(40);
    }
    
    public static linear45(param1:BigNumber) : BigNumber
    {
       return param1.mul(45);
    }
    
    public static linear50(param1:BigNumber) : BigNumber
    {
       return param1.mul(50);
    }
    
    public static linear100(param1:BigNumber) : BigNumber
    {
       return param1.mul(100);
    }
    
    public static linear0_25(param1:BigNumber) : BigNumber
    {
       return param1.mul(0.25);
    }
    
    public static linear(param1:BigNumber, param2:String) : BigNumber
    {
       return param1.mul(Number(param2));
    }
    
    public static linearPartialSum(param1:BigNumber, levelCostParams = "1") : BigNumber
    {
       return param1.mul(param1.add(1)).mul(0.5).mul(Number(levelCostParams));
    }
    
    public static nogardnitValue(param1:BigNumber, bonus = 1) : BigNumber
    {
       //var _loc2_:BigNumber = (CurrentUser.instance as UserData).outsiders.idleBonus.mul(0.01).add(1);
       return param1.mul(10).mul(bonus);
    }
    
    public static kumaValue(param1:BigNumber, levelAmountParams:String, bonus = 1) : BigNumber
    {
       var _loc3_:BigNumber = AncientFormulas.diminishingReturns(param1,levelAmountParams);
       return _loc3_.mul(bonus);
    }
    
    public static atmanValue(param1:BigNumber, levelAmountParams:String, bonus = 1) : BigNumber
    {
       var _loc3_:BigNumber = AncientFormulas.diminishingReturns(param1,levelAmountParams);
       return _loc3_.mul(bonus);
    }
    
    public static bubosValue(param1:BigNumber, levelAmountParams:String, bonus = 1) : BigNumber
    {
       var _loc3_:BigNumber = AncientFormulas.diminishingReturns(param1,levelAmountParams);
       return _loc3_.mul(bonus);
    }
    
    public static chronosValue(param1:BigNumber, levelAmountParams:String, bonus = 1) : BigNumber
    {
       var _loc3_:BigNumber = AncientFormulas.diminishingReturns(param1,levelAmountParams);
       return _loc3_.mul(bonus);
    }
    
    public static doraValue(param1:BigNumber, levelAmountParams:String, bonus = 1) : BigNumber
    {
       var _loc3_:BigNumber = AncientFormulas.diminishingReturns(param1,levelAmountParams);
       return _loc3_.mul(bonus);
    }
    
    public static exponential(param1:BigNumber, param2:String) : BigNumber
    {
       var power = Number(param2);
       return new BigNumber(Math.pow(power,param1.toNumber()));
    }
    
    public static exponentialPartialSum(param1:BigNumber) : BigNumber
    {
       return new BigNumber(2).pow(param1.add(1).toNumber()).add(-2);
    }
    
    public static diminishingReturns(param1:BigNumber, levelAmountParams:String) : BigNumber
    {
       var params:string[] = levelAmountParams.split(",");
       var p1:number = Number(params[0]);
       var p2:number = Number(params[1]);
       return new BigNumber(p1 * (1 - Math.exp(p2 * param1.toNumber())));
    }
    
    public static polynomial1_5(param1:BigNumber) : BigNumber
    {
       return param1.mul(param1.sqrt()).ceil();
    }
    
    public static polynomial1_5PartialSum(param1:BigNumber) : BigNumber
    {
       param1 = param1.add(1);
       var _loc2_:BigNumber = param1.sqrt();
       var _loc3_:BigNumber = param1.mul(_loc2_);
       var _loc4_:BigNumber = param1.mul(_loc3_).mul(0.4);
       var _loc5_:BigNumber = _loc3_.mul(0.5);
       var _loc6_:BigNumber = _loc2_.mul(0.125);
       var _loc7_:BigNumber = new BigNumber(0.00052).div(_loc3_);
       return _loc4_.sub(_loc5_).add(_loc6_).sub(_loc7_).ceil();
    }
    
    public static quadratic(param1:BigNumber) : BigNumber
    {
       return param1.pow(2);
    }
    
    public static quadraticPartialSum(param1:BigNumber) : BigNumber
    {
       return param1.mul(param1.add(1)).mul(param1.mul(2).add(1)).mul(1 / 6);
    }
    
    public static cubic(param1:BigNumber) : BigNumber
    {
       return param1.pow(3);
    }
    
    public static solomonRewards(param1:BigNumber) : BigNumber
    {
       if(param1.lessThan(20))
       {
          return param1.mul(5);
       }
       if(param1.lessThan(40))
       {
          return param1.sub(new BigNumber(20)).mul(4).add(100);
       }
       if(param1.lessThan(60))
       {
          return param1.sub(new BigNumber(40)).mul(3).add(180);
       }
       if(param1.lessThan(80))
       {
          return param1.sub(new BigNumber(60)).mul(2).add(240);
       }
       return param1.sub(new BigNumber(80)).add(280);
    }
    
    public static libAndSiy(param1:BigNumber, bonus = 1) : BigNumber
    {
       
       if(param1.lessThan(10))
       {
          return param1.mul(25).mul(bonus);
       }
       if(param1.lessThan(20))
       {
          return param1.sub(new BigNumber(9)).mul(24).add(225).mul(bonus);
       }
       if(param1.lessThan(30))
       {
          return param1.sub(new BigNumber(19)).mul(23).add(465).mul(bonus);
       }
       if(param1.lessThan(40))
       {
          return param1.sub(new BigNumber(29)).mul(22).add(695).mul(bonus);
       }
       if(param1.lessThan(50))
       {
          return param1.sub(new BigNumber(39)).mul(21).add(915).mul(bonus);
       }
       if(param1.lessThan(60))
       {
          return param1.sub(new BigNumber(49)).mul(20).add(1125).mul(bonus);
       }
       if(param1.lessThan(70))
       {
          return param1.sub(new BigNumber(59)).mul(19).add(1325).mul(bonus);
       }
       if(param1.lessThan(80))
       {
          return param1.sub(new BigNumber(69)).mul(18).add(1515).mul(bonus);
       }
       if(param1.lessThan(90))
       {
          return param1.sub(new BigNumber(79)).mul(17).add(1695).mul(bonus);
       }
       if(param1.lessThan(100))
       {
          return param1.sub(new BigNumber(89)).mul(16).add(1865).mul(bonus);
       }
       return param1.sub(new BigNumber(99)).mul(15).add(2025).mul(bonus);
    }
    
    public static quadraticSolomon(param1:number) : number
    {
       if(param1 < 20)
       {
          return Math.round(Math.pow(param1,1.5));
       }
       return Math.round(Math.pow(20,1.5)) + Math.round(Math.pow(param1 - 20,3));
    }

}