'use strict';

var mongoose = require('mongoose'),
    Doc = mongoose.model('Docs');

exports.list_all_docs = function(req, res) {
    Doc.find({},function(err, doc) {
        if (err)
            res.send(err);
        res.json(doc);
    });
};

exports.create_a_doc = function(req,res) {
    var filterParser = require("../helpers/ParseFiltersFromText");
    var textReplacer = require("../helpers/ReplaceTextFromList");
    var smartQuoteSanitizer = require("../helpers/SanitizeSmartQuotes");
    var keywords = req.body.keywordsToRedact;
    var text = req.body.originalDocument;
    var filters = filterParser(keywords); // parse the filters from provided text into an array
    text = smartQuoteSanitizer(text); // sanitize non-standard MS Word "smart" quotes
    text = textReplacer(filters, text); // replace the text in the document based on filters
    /*
    TODO: Store the processed document
    var new_doc = new Doc({body : text});
    new_doc.save(function(err, doc) {
        if(err)
            res.send(err);
        res.json(doc);
    });
    */
    res.send(text);
};
