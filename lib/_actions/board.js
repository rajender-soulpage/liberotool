// Actions types
import * as ActionTypes from "constants/ActionTypes";

export const activeBoard=(board)=>(dispatch)=>{
    dispatch({
        type : ActionTypes.ACTIVE_BOARD,
        payload : board
    })
}

