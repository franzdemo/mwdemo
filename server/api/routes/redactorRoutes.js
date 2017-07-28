'use strict';
module.exports = function(app) {
    var redactor = require('../controllers/redactorController');

    // routes
    app.route('/docs')
        .get(redactor.list_all_docs)
        .post(redactor.create_a_doc);

};