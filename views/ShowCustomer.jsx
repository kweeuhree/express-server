import React, { Component } from 'react';

export default class ShowCustomer extends Component {
    render() {
        // Log props to inspect what's being passed
        const customer = this.props.customer;
        console.log('Props:', this.props); 

        return (
            <div>
                <h1>Customer name: {customer.name}</h1>
                <h1>Customer surname: {customer.surname}</h1>
            </div>
        );
    }
}
