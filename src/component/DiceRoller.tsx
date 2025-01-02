import React from 'react';
import Section from './section.tsx';
import DiceComp from './dice_comp.tsx';
import { Dice } from '../model/types.ts';

export default function DiceRoller({dispatcher}){
    return <div className="Dice_roller">
        <Section name="Add dice:"/>
        <DiceComp dice={new Dice("Boost")} idx="Boost" callback={()=>dispatcher({type:"Add_dice", data:"Boost"})}/>
        <DiceComp dice={new Dice("Abillity")} idx="Abillity" callback={()=>dispatcher({type:"Add_dice", data:"Abillity"})}/>
        <DiceComp dice={new Dice("Proficiency")} idx="Proficiency" callback={()=>dispatcher({type:"Add_dice", data:"Proficiency"})}/>
        <DiceComp dice={new Dice("Setback")} idx="Setback" callback={()=>dispatcher({type:"Add_dice", data:"Setback"})}/>
        <DiceComp dice={new Dice("Difficulty")} idx="Difficulty" callback={()=>dispatcher({type:"Add_dice", data:"Difficulty"})}/>
        <DiceComp dice={new Dice("Challenge")} idx="Challenge" callback={()=>dispatcher({type:"Add_dice", data:"Challenge"})}/>
        <button className="btn roll" onClick={()=>dispatcher({type:"Roll_dice"})}>Roll</button>
    </div>;
}

