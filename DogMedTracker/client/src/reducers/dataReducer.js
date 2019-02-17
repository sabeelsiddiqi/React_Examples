import {FETCH_DATA,NEW_DATA} from '../actions/types';


const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_DATA:
            return {
                ...state,
                items: action.payload.data.data.reverse()
            };
        case NEW_DATA:
            return {
                ...state,
                item: action.payload
            };
        default: 
            return state;
    }
}