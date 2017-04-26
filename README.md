# PayumClientNodeJs

The Node.js client for a payment processing micro service: [PayumServer](https://github.com/Payum/PayumServer)

`npm install payum-client --save`

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

## Developed by Forma-Pro

Forma-Pro is a full stack development company which interests also spread to open source development. 
Being a team of strong professionals we have an aim an ability to help community by developing cutting edge solutions in the areas of e-commerce, docker & microservice oriented architecture where we have accumulated a huge many-years experience. 
Our main specialization is Symfony framework based solution, but we are always looking to the technologies that allow us to do our job the best way. We are committed to creating solutions that revolutionize the way how things are developed in aspects of architecture & scalability.

If you have any questions and inquires about our open source development, this product particularly or any other matter feel free to contact at opensource@forma-pro.com

