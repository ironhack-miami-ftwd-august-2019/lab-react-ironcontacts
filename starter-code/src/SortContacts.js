import React, { Component } from 'react';

class SortContacts extends Component {
    render() {
        return (
            <React.Fragment>
                <button onClick={this.props.sortName}>Sort By Name</button>
                <button onClick={this.props.sortPop}>Sort By Pop</button>
            </React.Fragment>
        );
    }
}

export default SortContacts;