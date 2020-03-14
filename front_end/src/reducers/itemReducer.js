import {v4 as uuid} from 'uuid';
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types';


const initialState = {
    items: [
        {id: uuid(), name: 'pepe'},
        {id: uuid(), name: 'rober'},
        {id: uuid(), name: 'zapat'},
        {id: uuid(), name: 'quiqu'}
    ]
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;

    }
}