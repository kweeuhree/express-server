import React, { Component } from 'react';

export default class ShowCustomers extends Component {
    render() {
        // Log props to inspect what's being passed
        const customers = this.props.customers;
        console.log('Props:', this.props); 

        return (
            <>
                {customers.map((customer, index) => (
                    <div key={index}>
                        <h1>Customer name: {customer.name}</h1>
                        <h1>Customer surname:{customer.surname}</h1>
                    </div>
                ))}
            </>
        );
    }
}
