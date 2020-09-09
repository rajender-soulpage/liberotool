// Actions types
import * as ActionTypes from "constants/ActionTypes";

var initialState = {
  active_board: "board-1",
};

export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ACTIVE_BOARD:
      return {
        ...state,
        active_board: action.payload,
      };
    default:
      return state;
  }
}
