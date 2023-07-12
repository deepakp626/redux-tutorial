import {ADD_TO_CARD} from '../constants'
const initialState = {
    cardData : []
}
export default function cardItems(state =initialState,action)
{
    // 
    switch(action.type){
        case ADD_TO_CARD :
            return {
                ...state,
                cardData:action.data
            }
            break;
        default : 
            return state;
    }
}