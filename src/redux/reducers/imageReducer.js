import { actionTypes } from "../constants/action-types";


const intialState = {
    images:[]
}
export const imageReducer = (state = intialState,{type, payload}) => {
    switch(type) {
        case actionTypes.SET_IMAGES:
            return {...state, images:payload};

            default:
                return state;
    }
}