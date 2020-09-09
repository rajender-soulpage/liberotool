// Actions types
import * as ActionTypes from "constants/ActionTypes";

var initialState={
    tool : "pencil"
}

export default function toolReducer(state=initialState,action){
    switch(action.type){
        case ActionTypes.ADD_TOOL : 
        return {
            ...state,tool : action.payload
        } 
        default:
            return state;
    }
}