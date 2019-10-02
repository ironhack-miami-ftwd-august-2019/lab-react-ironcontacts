import React, { Component } from 'react';

class ShowContacts extends Component {

  showTheContacts = () => {
    let listOfContacts = this.props.showContacts.map((eachContact, i)=>{ //looping
      return ( 
            <li key={i}>
              <img src={eachContact.pictureUrl}/>
              <p>{eachContact.name}</p>
              <p>{eachContact.popularity}</p>
              <button onClick={()=>this.props.deleteContactProp(i)}>Delete {i}</button>
            </li>
      )
    })
    return listOfContacts
  }

    render() {
        return (
            <React.Fragment>
                  {this.showTheContacts()}
            </React.Fragment>
        );
    }
}

export default ShowContacts;