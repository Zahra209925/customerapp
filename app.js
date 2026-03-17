const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');

let customers = [
  { id: '1588323375416', firstname: 'John', lastname: 'Johnson', email: 'john@johnson.com', phone: '8233243' },
  { id: '1588323375417', firstname: 'Mary', lastname: 'Smith', email: 'mary@smith.com', phone: '6654113' },
  { id: '1588323375418', firstname: 'Peter', lastname: 'North', email: 'peter@north.com', phone: '901176' },
];

// List all customers
app.get('/customers', (req, res) => {
  res.render('customers', { customers });
});

// Show add customer form
app.get('/addcustomer', (req, res) => {
  res.render('addcustomer');
});

// Add new customer
app.post('/addcustomer', (req, res) => {
  const newCustomer = {
    id: Date.now().toString(),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone
  };

  customers.push(newCustomer);
  res.redirect('/customers');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});