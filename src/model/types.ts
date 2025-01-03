import RealRandom from "./roller.ts";

/*
Dice symbols:
b-Blank
s-Success
f-Failure
t-Treat
a-Advantage
r-Triumph
d-Despair
*/

export const dices = {
    "Boost":[
        "b",
        "b",
        "s",
        "sa",
        "aa",
        "a"
    ],
    "Abillity":[
        "b",
        "s",
        "s",
        "ss",
        "a",
        "a",
        "sa",
        "aa"
    ],
    "Proficiency":[
        "b",
        "s",
        "s",
        "ss",
        "ss",
        "a",
        "sa",
        "sa",
        "sa",
        "aa",
        "aa",
        "r"
    ],
    "Setback":[
        "b",
        "b",
        "f",
        "f",
        "t",
        "t"
    ],
    "Difficulty":[
        "b",
        "f",
        "ff",
        "t",
        "t",
        "t",
        "tt",
        "ft"
    ],
    "Challenge":[
        "b",
        "f",
        "f",
        "ff",
        "ff",
        "t",
        "t",
        "ft",
        "ft",
        "tt",
        "tt",
        "d"
    ]
}

export class Dice{
    dice_type:string;
    result:string;
    constructor(dice_type){
        this.dice_type=dice_type;
        this.result = dices[dice_type][0];
    }
}

export class DicePool{
    dices:Dice[];
    results:string[];
    constructor(){
        this.dices = [];
        this.results = [];
    }

    addDice(type:string){
        if(this.dices.length>29)
            return;
        this.dices.push(new Dice(type));
    }

    removeDice(id:number){
        this.dices.splice(id,1);
        this.calcResult();
    }

    rollDice(){
        for(let i=0; i<this.dices.length;i++){
            let dice:Dice = this.dices[i];
            let sides = dices[dice.dice_type];
            dice.result=sides[RealRandom(sides.length)];
        }
        this.calcResult();
    }

    private calcResult(){
        //Unpack results
        var unpack:string[] = [];
        for(let i=0; i<this.dices.length; i++){
            let res = this.dices[i].result;
            if (res.length>1){
                unpack.push(res[0]);
                unpack.push(res[1]);
            }else{
                unpack.push(res[0]);
            }
        }

        //Calculate result occurrence
        var sumUp = {
            s:0,
            a:0,
            r:0,
            d:0
        };
        for(let i=0; i<unpack.length; i++){
            switch(unpack[i]){
                case "s":{
                    sumUp.s+=1;
                    break;
                }
                case "f":{
                    sumUp.s-=1;
                    break;
                }
                case "a":{
                    sumUp.a+=1;
                    break;
                }
                case "t":{
                    sumUp.a-=1;
                    break;
                }
                case "r":{
                    sumUp.r+=1;
                    break;
                }
                case "d":{
                    sumUp.d+=1;
                    break;
                }
            }
        }

        //Get result
        var newResult:string[] = [];
        //Triumph
        for(let i=0; i<sumUp.r; i++)
            newResult.push("r");
        //Despair
        for(let i=0; i<sumUp.d; i++)
            newResult.push("d");
        //Success
        for(let i=0; i<sumUp.s; i++)
            newResult.push("s");
        //Failure
        for(let i=0; i>sumUp.s; i--)
            newResult.push("f");
        //Advantage
        for(let i=0; i<sumUp.a; i++)
            newResult.push("a");
        //Threat
        for(let i=0; i>sumUp.a; i--)
            newResult.push("t");

        this.results=newResult;
    }
}
