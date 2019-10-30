import React from 'react';
//import AppRouter from './routers/AppRouter';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';
import UpdateContact from './components/UpdateContact';
import DeleteContact from './components/DeleteContact';
import ContactsDataService from './api/ContactsDataService';

import './styles/App.css';

class App extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
            contacts: [
              /*
                {id: 0, firstName: 'a', lastName: 'a', email: 'a@a.com', phone: '555-555-5555'},
                {id: 1, firstName: 'b', lastName: 'b', email: 'b@b.com', phone: '555-555-5555'},
                {id: 2, firstName: 'c', lastName: 'c', email: 'c@c.com', phone: '555-555-5555'},
                {id: 3, firstName: 'd', lastName: 'd', email: 'd@d.com', phone: '555-555-5555'},
                {id: 4, firstName: 'e', lastName: 'e', email: 'e@e.com', phone: '555-555-5555'},
                {id: 5, firstName: 'f', lastName: 'f', email: 'f@f.com', phone: '555-555-5555'}
                */
            ],
            idCount: 0,
            message: null,
            path: ''
    }
    this.addContact = this.addContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.updateContact = this.updateContact.bind(this);
  }
  componentDidMount(){
    const path = window.location.pathname.slice(6);
    this.setState({path: path})
    //initialize contact list from Java side
    ContactsDataService.retrieveAllContacts()
      .then(
        response => {
          const idCount = response.data.length
          console.log("idCount: ", idCount);

          this.setState({
            contacts: response.data,
            idCount: idCount
          })
        }
      )
  }

  addContact(contact) {
    this.setState((state) => ({
      contacts: [...state.contacts, {...contact}],
      idCount: state.contacts.length +1
    }))
    ContactsDataService.addContact(contact)
    .then(
      response => {
        alert("Contact was successfully added to the database.");
      }
    )
  }
  deleteContact(contact) {
    let newContactList = this.state.contacts.filter((c) => { 
      return c.id !== contact
    })
    this.setState((state) => ({
      contacts: [...newContactList]
    }))
    ContactsDataService.deleteContact(contact)
      .then(
        response => {
          alert("Contact was successfully deleted from database.");
        }
      )
  }
  updateContact(contact) {
    const cid = this.state.contacts.findIndex(c => c.id==contact.id);
    this.state.contacts[cid].firstName = contact.firstName;
    this.state.contacts[cid].lastName = contact.lastName;
    this.state.contacts[cid].email = contact.email;
    this.state.contacts[cid].phone = contact.phone;
    this.forceUpdate()
    ContactsDataService.updateContact(cid, contact)
    .then(
      response => {
        alert("Contact was successfully updated in the database.");
      }
    )
  }

  render() {
    return (
      <BrowserRouter>
      <div className="app">
        <div ><Header /></div>
        <Switch>
          <Route
              path='/'
              exact={true}
              render={(props) => <Contacts {...props} contacts={this.state.contacts}/>}
          />   
          <Route
              path='/add'
              render={(props) => <AddContact {...props} addNewContact={this.addContact} idCount={this.state.idCount+1}/>}
          />            
          <Route
              path='/update/:id'
              render={(props) => <UpdateContact {...props} updateContact={this.updateContact} contacts={this.state.contacts} />}
          />  
          <Route
              path='/delete/:id'
              render={(props) => <DeleteContact {...props} deleteContact={this.deleteContact} contacts={this.state.contacts}/>}
          />    
          <Route
              path='/path/:id'
              render={(props) => <Contacts {...props} contacts={this.state.contacts}/>}
          />   
          <Route
              render={(props) => <Contacts {...props} contacts={this.state.contacts}/>}
          />   
   
        </Switch>
        <div>
          <li><button className="btn btn-primary" onClick={this.handleSuccessfulResponse}>TEST</button></li>
          {this.state.welcomeMessage}
        </div>
      </div>
    </BrowserRouter>	  );
  }
}

export default App;
