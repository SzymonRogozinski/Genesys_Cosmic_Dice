/*
action info
type:   Add_dice,             Remove_dice,        Roll_dice
data:   string(Dice_type),    number(Dice_id),    None

state info
DicePool
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
            console.log(state.dicePool.dices);
            state.dicePool.rollDice();
            break;
        }
    }
    return {
        ...state
    };
}