import React from 'react';

export default function DiceComp({idx,dice,callback}){
    return <div key={idx} id={idx} className={"Dice "+dice.dice_type+" "+(dice.result.length===1?"a":"aa")} onClick={callback}>
        {dice.result.length>1?
            <div className={"Dice_symbol "+dice.result[1]}/>
            :
            <div/>
        }
        <div className={"Dice_symbol "+dice.result[0]}/>
    </div>
}