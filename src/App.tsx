import React from 'react';
import {useReducer} from 'react';
import Title from './component/title.tsx';
import Instruction from './component/instruction.tsx';
import Section from './component/section.tsx';
import DiceComp from './component/dice_comp.tsx';
import Box from './component/box.tsx';
import DiceRoller from './component/DiceRoller.tsx';
import { DicePool } from './model/types.ts';
import diceReducer from './reducer.tsx';

function App() {
  const [state, dispatch] = useReducer(diceReducer,{dicePool: new DicePool()});
  return (
    <div className="App">
      <Title/>
      <Instruction/>
      <Section name="Dice pool"/>
      <Box children={undefined}>
        {state.dicePool.dices.map((d, i)=>
			    (<DiceComp dice={d} idx={i} callback={()=>dispatch({type:"Remove_dice", data:i})}/>)
		    )}
	    </Box>
      <DiceRoller dispatcher={dispatch}/>
      <Section name="Result"/>
      <Box children={undefined}>
		
	    </Box>
    </div>
  );
}

export default App;
