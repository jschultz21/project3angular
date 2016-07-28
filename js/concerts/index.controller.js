"use strict";

(function(){
  angular
  .module("concerts")
  .controller("ConcertIndexController", [
    "ConcertFactory",
    "$state",
    "$stateParams",
    "$scope",
    "$location",
    "CommentFactory",
    ConcertIndexControllerFunction
  ]);

  function ConcertIndexControllerFunction(ConcertFactory, $state, $stateParams, $scope, $location, CommentFactory){
    // NHO: Overall I think we could simplify this controller + resulting view code by focusing on user flow:
      // 1. User Searches for a new city
      // 2. That city is saved in the url as a paramter, i.e. /#/concerts?city=denver
      // 3. Use $stateParams to access the city the user searched for
      // 4. Use that city to make a query to our factory, therefore making a new API requests
      // 5. After the results are loaded, attach the data to view model
      // 6. Render each concert in the view

    // NHO: what is this for? Think you should be able to access params via $stateParams
    // https://github.com/angular-ui/ui-router/wiki/URL-Routing#stateparams-service
    var searchObject = $location.search();

    var vm = this
    vm.concerts = ConcertFactory.query();
    // NHO: why are we using $scope here?
    $scope.changeUrl = function(){
      // $location.search('city', $scope.global.search);
    }

    //  NHO: what is this code doing?
    //  is this being used?
    vm.apiSearch = function($scope) {
      var service = ConcertFactory, eventName = 'concert';
      if ($rootScope.currentController == 'ConcertIndexController'){
        eventName = 'concert'
      }

      if (searchObject == true) {
      var search = searchObject
    }
      else {
        var search = $scope.global.search

      }
      service.query({query: search}, function(response){
        $scope.$broadcast(eventName, response)
      });
    };
    vm.concert = new ConcertFactory();
    vm.create = function(){
      vm.concert.$save().then(function(response){
        $state.go("concertShow", ({id: response.id}));
      })
    }

    vm.comments = CommentFactory.query(); // NHO: would recommend waiting untill all the comments have been loaded
    // before attaching them as a property to the vm.
    vm.comment = new CommentFactory();
    vm.addComment = function() {
      vm.comment.city = $scope.global.search
      console.log(vm.comment)
      vm.comment.$save().then(function(){
        vm.comment = {};
        $state.reload();
      });
    }
  }
})();
