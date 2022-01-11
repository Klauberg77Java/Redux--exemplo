import React from "react";

export function ContactList(props){
    const items = props.contacts.map( item => (<li key={item.id}>{item.name}</li>));
    return (
        <ul>
            {items}
        </ul>
    )
}


