import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddContact from './AddContact'
import SortContacts from './SortContacts'
import ShowContacts from './ShowContacts'
import contacts from './contacts'

console.log(contacts.length)


class App extends Component {

  state = {
    showContacts : contacts.splice(0,5),
    allContacts  : contacts
  }

  

  deleteContact = (index) => {
    console.log('delete ',index)
    let contactList = [...this.state.showContacts]
    contactList.splice(index,1)
    this.setState({
      showContacts: contactList
    })
  }

  addContact = () => {
    let randomIndex = Math.floor(Math.random()*this.state.allContacts.length)
    let randomContact = this.state.allContacts[randomIndex]
    let newContactList = [...this.state.showContacts] //make copy of current list 
    newContactList.push(randomContact) //add new random contact 

    let allContactList = [...this.state.allContacts]
    allContactList.splice(randomIndex, 1)

    this.setState({
      showContacts: newContactList,
      allContacts : allContactList
    })
    console.log(this.state)
  }

  sortByName = () => {

    this.setState({
      showContacts: [...this.state.showContacts].sort( compareNames ) //sort takes a function of how it wants to be sorted
    })
  }

  sortByPop = () => {

    this.setState({
      showContacts: [...this.state.showContacts].sort( comparePops ) //sort takes a function of how it wants to be sorted
    })
  }


  render() {
    console.log(this, contacts.length)
    return (
      <div className="App">

        <SortContacts sortName={this.sortByName} sortPop={this.sortByPop}/>       
        <AddContact addContactProp={this.addContact} />
        <ShowContacts showContacts={this.state.showContacts} deleteContactProp={this.deleteContact}/>
      
      </div>
    );
  }
}

export default App;





function compareNames( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}


function comparePops( a, b ) {
  if ( a.popularity < b.popularity ){
    return 1;
  }
  if ( a.popularity > b.popularity ){
    return -1;
  }
  return 0;
}