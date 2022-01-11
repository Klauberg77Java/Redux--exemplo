import {types} from '../types/contacts.types';
let nextID = 3;
const initialState = {
    currentName:"",
    contacts : [
        {id:1,name:"Maria"},
        {id:2,name:"Ana"},
    ]
}




export function rootReducer( state = initialState, action){

    switch(action.type){
        case types.ADD_CONTACT:
            return addContact(state,action);
        case types.SET_NAME:
            return setCurrentName(state,action);
    }

    return state;
}

function addContact(state,action){
    const contact = {
        id:nextID++,
        name:action.payload.name
    }
    const contacts = [...state.contacts, contact];
    return {...state,contacts}
}
function setCurrentName(state,action){
   const currentName = action.payload.name
    return {...state,currentName}
}