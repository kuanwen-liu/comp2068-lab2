'use strict';
var express = require('express');
var router = express.Router();


// create some variables
var newMethod;
var methodOperation;
var newX;
var newY;
var newResult;
var newErrorMessage;

/* GET home page. */
router.get('/', function (req, res) {

    // store the vale from URL
    newMethod = req.query.method;
    newX = parseInt(req.query.x);
    newY = parseInt(req.query.y);

    // check the method and calculate
    // if the method is anything else show the error message
    if (newMethod == 'add') {
        newResult = newX + newY;
        methodOperation = '+';
        newErrorMessage = '';
    } else if (newMethod == 'subtract') {
        newResult = newX - newY;
        methodOperation = '-';
        newErrorMessage = '';
    } else if (newMethod == 'multiply') {
        newResult = newX * newY;
        methodOperation = '*';
        newErrorMessage = '';
    } else if (newMethod == 'divide') {
        newResult = newX / newY;
        methodOperation = '/';
        newErrorMessage = '';
    } else {
        newErrorMessage = 'The method is incorrect!!';
    }

    // passing the values to index.pug
    res.render('index', { method: methodOperation, x: newX, y: newY, result: newResult, errorMessage: newErrorMessage });
});


module.exports = router;
