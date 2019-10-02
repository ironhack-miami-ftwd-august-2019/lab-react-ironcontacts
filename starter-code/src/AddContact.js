import React, { Component } from 'react';

class AddContact extends Component {
    
    render() {
        return (
            <button onClick={this.props.addContactProp}>Add Random Contact</button>
        );
    }
}

export default AddContact;