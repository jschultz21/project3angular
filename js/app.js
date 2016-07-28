'use strict';

(function(){
  angular
  .module("project3", ["ui.router", "concerts"])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction ($stateProvider){
    // NHO: how could you account for any url that does not match a defined state?
    $stateProvider
    .state("welcome",{
      url: "",
      templateUrl: "welcome.html"
    })
    .state("concertIndex", {
      url: "/concerts",
      templateUrl: "js/concerts/index.html",
      controller: "ConcertIndexController",
      controllerAs: "ConcertIndexViewModel"

    })
    .state("concertShow", {
      url: "/concerts/:id",
      templateUrl: "js/concerts/show.html",
      controller: "ConcertShowController",
      controllerAs: "ConcertShowViewModel"
    });
  }
}());
