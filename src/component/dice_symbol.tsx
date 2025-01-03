import React from 'react';

export default function DiceSymbol({symbol, idx}){
    return <div key={idx} className="Dice">
            <div className={"Dice_symbol "+symbol} />
        </div>;
}