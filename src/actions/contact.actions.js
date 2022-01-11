import {types} from '../types/contacts.types';

export function addContact(name){
    return {
        type:types.ADD_CONTACT,
        payload:{name}
    }
}

export function setName(name){
    return {
        type:types.SET_NAME,
        payload:{name}
    }
}
