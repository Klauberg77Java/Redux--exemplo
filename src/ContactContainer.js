import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/contact.actions';
import {ContactList} from './ContactList';

function mapStateToProps(store){

    return {
        newContacts: store.contacts,
        currentName: store.currentName
    }
}

function mapDispatchToProps(dispatch){

    return {
        adicionarContato:(name)=>{
            dispatch(actions.addContact(name)); 
        },
        setName:(name)=>{
            dispatch(actions.setName(name)); 
        }
    }
}

class ContactContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            contacts : [
                {id:1, name:"Gustavo"},
                {id:2, name:"Arthur"},
            ]
        }
    }

    setName = (event)=>{
        const name = event.target.value;
        this.props.setName(name); 
    }
    addContact = ()=>{
        const name = this.props.currentName;
        this.props.adicionarContato(name);
        this.props.setName(""); 
    }



    render(){
        return (
            <div>
                <input value={this.props.currentName} onChange={this.setName}/><button onClick={this.addContact}>add contato</button>
               <ContactList contacts={this.props.newContacts}/>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactContainer)