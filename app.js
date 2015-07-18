/* It is a good habbit to wrap js in a closure */
(function(){
  // This is Module example
  var app = angular.module('store', ['store-products', 'store-products-panels']);

  // specify the name of the Controller
  // $http is a Service! We can use it in such way
  app.controller('StoreController', [ '$http', function($http) {
    // product is a property of the Controller
    var store = this;
    // We need to init products to an empty array because the page will render
    // before our data returns from our get request
    store.products = [];

    // We make a Service request to a server
    $http.get('/products.json').success(function(data) {
      store.products = data;
    });

  }]);

})(); // end wrapp
