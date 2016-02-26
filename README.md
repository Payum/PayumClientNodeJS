# PayumClientNodeJs

The Node.js client for [PayumServer](https://github.com/Payum/PayumServer)

```js
var payumServerUri = 'http://localhost';

var payum = require('payum-client')(payumServerUri);

payum.payment.create({totalAmount: 100, currencyCode: 'USD'}, function(err, payment) {
    if (!err) {
        payum.token.create({type: 'capture', paymentId: payment.id, afterUrl: 'http://google.com'}, function(err, token) {

            // redirect user to this url token.targetUrl or you can pass this url to the browser and use payum.js to do everything on your page.
        });
    }
});
```

