import { createPointsWay, equalPositions } from "../utils/utils";

const START = '/index/START';
const SET = '/index/SET';

const posAnswerDefault = { x: -1, y: -1 };

const initialState = {
   gameSettings: {
      posStart: { x: 0, y: 0 },
      posEnd: { x: 0, y: 0 },
      way: [],
      field: [
         [0, 0, 0],
         [0, 0, 0],
         [0, 0, 0],
      ],
      posAnswer: { ...posAnswerDefault },
      isWin: false,
   },
}

const Reducer = (state = initialState, action) => {
   switch (action.type) {
      case START:
         const newState = { ...state };
         newState.gameSettings.posStart = {
            x: Math.floor(Math.random() * state.gameSettings.field[0].length),
            y: Math.floor(Math.random() * state.gameSettings.field.length),
         }
         newState.gameSettings.posAnswer = { ...posAnswerDefault };
         newState.gameSettings.isWin = false;
         createPointsWay(newState);
         return newState;
      case SET:
         if (equalPositions(state.gameSettings.posAnswer, posAnswerDefault)) {
            const newState = { ...state };
            newState.gameSettings.posAnswer = { ...action.payload.choosePos };
            newState.gameSettings.isWin = equalPositions(action.payload.choosePos, state.gameSettings.posEnd);
            return newState;
         } else {
            return { ...state };
         }
      default:
         return state;
   }
}

export const startGame = () => {
   return { type: START }
}

export const setAnswer = (choosePos) => {
   return { type: SET, payload: { choosePos } }
}

export default Reducer;