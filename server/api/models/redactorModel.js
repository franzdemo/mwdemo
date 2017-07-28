'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DocSchema = new Schema({
    body: {
        type: String,
        Required: 'Document cannot be empty'
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Docs', DocSchema);