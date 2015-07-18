(function () {
  var app = angular.module('store-products-panels', []);

  // Panel navigation Directive
  app.directive('productPanelNav', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-panel-nav.html'
    };
  });

  // Product description Directive
  app.directive('productDescription', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-description.html'
    };
  });

  // Product specifications Directive
  app.directive('productSpecs', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-specs.html'
    };
  });

  // Product reviews Directive
  app.directive('productReviews', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-reviews.html',
      controller: function() {
        // set review equal to empty object
        this.review = {};

        // add review to our array of reviews
        this.addReview = function(product) {
          // push the review of current Controller into an array
          product.reviews.push(this.review);
          // clear the form fields
          this.review = {};
        };
      },
      controllerAs: 'reviewCtrl'
    };
  });
})();
