const express=require('express');
const router=express.Router();
const customers=require('../models/customers_model');

router.get('/', function(request, response) {
    customers.getAllCustomers(function(err, result) {
        if(err) {
            response.send(err);
        } else {
            response.json(result);
        }
    });
});

router.get('/:username', function(request, response) {
    customers.getOneCustomer(request.params.username, function(err, result) {
        if(err) {
            response.send(err);
        } else {
            response.json(result);
        }
    });
});

router.post('/', function(request, response) {
    customers.add(request.body, function(err, result) {
        if(err) {
            response.send(err);
        } else {
            response.json(result);
        }
    });
});

router.put('/:username', function(request, response) {
    customers.update(request.params.username, request.body, function(err, result) {
        if(err) {
            response.send(err);
        } else {
            response.json(result);
        }
    });
});

router.patch('/:username', function(request, response) {
    customers.updatePassword(request.params.username, request.body, function(err, result) {
        if(err) {
            response.send(err);
        } else {
            response.json(result);
        }
    });
});

router.delete('/:username', function(request, response) {
    customers.delete(request.params.username, request.body, function(err, result) {
        if(err) {
            response.send(err);
        } else {
            response.json(result);
        }
    });
});

module.exports=router;
