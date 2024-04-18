const express = require('express');
const router = express.Router();


const customers = require('../models/customersData');

//get all customers

router.get('/', (req, res) => {
    res.render('ShowCustomers', { customers: customers });
});

//get a single customer 

router.get('/:id', (req, res) => {
    const found = customers.find(customer => customer.id === parseInt(req.params.id));
    
    if(found) {
        console.log(found);
        res.render('ShowCustomer', { customer: found })
    } else {
        res.status(400).json({ msg: `Customer not found with id of ${req.params.id}` });
    }
})


// post a customer
router.post('/', (req, res) => {

    const newId = customers.length + 1;

    const newCustomer = {
        id: newId,
        name: req.body.name,
        surname: req.body.surname
    }

    if(!newCustomer.name || !newCustomer.surname) {
        res.status(400).json({ msg: `Please include name and surname` });
    }

    customers.push(newCustomer);

    res.json( customers );

    res.render('ShowCustomers', { customers: customers })
})

// update a customer
router.put('/:id', (req, res) => {
    const found = customers.find(item => item.id === parseInt(req.params.id));

    if(found) {
        const updatedCustomer = req.body;

        customers.forEach(item => {
            if(item.id === parseInt(req.params.id)) {
                item.name = updatedCustomer.name ? updatedCustomer.name : item.name;
                item.surname = updatedCustomer.surname ? updatedCustomer.surname : item.surname;

                res.json({ msg: 'Updated customer', UpdatedCustomer: item });

                // res.render('ShowCustomer', { customer: item });
            }
        });
    } else {
        res.status(400).json({ msg: `Customer not found with id of ${req.params.id}` });
    }
})

// delete a customer
router.delete('/:id', (req, res) => {
    const found = customers.find(customer => customer.id === parseInt(req.params.id));

    if(found) {
        res.json({ msg: `Deleted a customer with id of ${req.params.id}`, customers: customers.filter(customer => customer.id !== parseInt(req.params.id)) });
        // res.render('ShowCustomers', { customers: customers });
    } else {
        res.status(400).json({ msg: `Customer not found with id of ${req.params.id}` });
    }
})


//-----------------------export--
module.exports = router;