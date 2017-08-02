var api = require('../../../../api/event');

module.exports  = function(app) {
    
    app.route('/api/v1/event')
        .post(api.add)
        .get(api.list);

    app.route('/api/v1/event/:eventId')
        .delete(api.remove)
        .get(api.find)
        .put(api.update);
};