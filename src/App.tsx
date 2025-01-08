import React from 'react';
import {useReducer} from 'react';
import Title from './component/title.tsx';
import Instruction from './component/instruction.tsx';
import Section from './component/section.tsx';
import DiceComp from './component/dice_comp.tsx';
import DiceSymbol from './component/dice_symbol.tsx';
import Box from './component/box.tsx';
import DiceRoller from './component/dice_roller.tsx';
import { DicePool } from './model/types.ts';
import diceReducer from './reducer.tsx';

function App() {
  const [state, dispatch] = useReducer(diceReducer,{dicePool: new DicePool(), rolling: false});
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
      <DiceRoller state={state} dispatcher={dispatch}/>
      <Section name="Result"/>
      <Box children={undefined}>
        {state.dicePool.results.map((r, i)=>
			    (<DiceSymbol symbol={r} idx={i}/>)
		    )}
	    </Box>
    </div>
  );
}

export default App;
