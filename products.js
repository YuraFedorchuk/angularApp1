(function() {
  /* Create new Module (Sub-Module of main) */

  var app = angular.module('store-products', []);



  /* Define a Directive to use a templaye file as an HTML tag */

  app.directive('productTitle', function() {
    return {
      // A configuration that defines how a directive should work
      // productTitle in JS will be translated in product-title in HTML!
      // type of Directive (E == HTML element)
      // There are also attribute Directives <h3 product-title></h3> [restrict: 'A']
      // Use Element Directives for UI widgets and Attr Directives for mixin behaviour.. like a tooltip
      restrict: 'E',
      // URL of a template
      templateUrl: 'product-title.html'
    };
  });



  /* Define directive for product panels */

  app.directive('productPanels', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',

      // We move the panel controller inside a Directive!
      controller: function() {
        // initialize tab that is active by default
        this.tab = 1;

        // function to change the current tab
        this.selectTab = function(setTab) {
          this.tab = setTab;
        };

        // function that checks if the tab is selected
        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      // Specify the alias we want to use inside the Directive to use as a Controller
      controllerAs: 'panel'
    };
  });

  /* TODO! Remove tp products-panels.js file - create new Module */
  /* Directive for products panels */



})(); // end (function())
