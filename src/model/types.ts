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
        this.dices.push(new Dice(type));
    }

    removeDice(id:number){
        this.dices.splice(id,1);
    }

    rollDice(){
        let res="";
        for(let i=0; i<this.dices.length;i++){
            let dice:Dice = this.dices[i];
            let sides = dices[dice.dice_type];
            dice.result=sides[RealRandom(sides.length)];
            res+=dice.result;
        }
        console.log(res);
    }
}
