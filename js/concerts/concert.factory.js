'use strict';

(function(){
  angular
    .module("concerts")
    .factory("ConcertFactory", ["$resource", ConcertFactoryFunction]);

    function ConcertFactoryFunction($resource){
        return $resource("https://gigmappr.herokuapp.com/concerts/:id",{},{update: {method: "PUT"}
      });
    }

}());
