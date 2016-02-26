var request = require('request');

Payum = function(serverUrl) {
    var payum = this;

    payum.serverUrl = serverUrl;

    payum.payment = {
        create: function(payment, callback) {
            var options = {
                uri: payum.serverUrl + '/payments',
                body: payment,
                json: true
            };
            request.post(options, function (error, response, body) {
                if (!error && response.statusCode == 201) {
                    callback(null, body.payment);
                } else {
                    callback(error);
                }
            });
        },
        get: function(id, callback) {
            request.get(payum.serverUrl + '/payments/' + id, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var data = JSON.parse(body);

                    callback(null, data.payment);
                } else {
                    callback(error);
                }
            });
        }
    };

    payum.token = {
        create: function(token, callback) {
            var options = {
                uri: payum.serverUrl + '/tokens',
                body: token,
                json: true
            };
            request.post(options, function (error, response, body) {
                if (!error && response.statusCode == 201) {
                    callback(null, body.token);
                } else {
                    callback(error);
                }
            });
        }
    };
};

module.exports = function(serverUrl) {
    return new Payum(serverUrl);
};