// Actions types
import * as ActionTypes from "constants/ActionTypes";

export const handleTool=(tool)=>(dispatch)=>{
    dispatch({
        type : ActionTypes.ADD_TOOL,
        payload : tool
    })
}