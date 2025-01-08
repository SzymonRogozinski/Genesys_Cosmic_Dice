/*
action info
type:   Add_dice,             Remove_dice,        Roll_dice
data:   string(Dice_type),    number(Dice_id),    dispatcher

state info
DicePool
rolling:bool
*/

export default function diceReducer(state, action){
    switch(action.type){
        case "Add_dice": {
            state.dicePool.addDice(action.data);
            break;
        }
        case "Remove_dice": {
            state.dicePool.removeDice(Number(action.data));
            break;
        }
        case "Roll_dice": {
            state.dicePool.rollDice().then(function() {
                action.data({type:"Refresh"})
            });
            state.rolling=true;
            break;
        }
        case "Refresh": {
            state.rolling=false;
            break;
        }
    }
    return {
        ...state
    };
}