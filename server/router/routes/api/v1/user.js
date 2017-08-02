var api = require('../../../../api/user');

module.exports  = function(app) {
    
    app.route('/api/v1/user')
        .post(api.add)
        .get(api.list);

    app.route('/api/v1/user/:userId')
        .delete(api.remove)
        .get(api.find)
        .put(api.update);
};