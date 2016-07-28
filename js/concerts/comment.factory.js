'use strict';

(function(){
  angular
    .module("concerts")
    .factory("CommentFactory", ["$resource", CommentFactoryFunction]);

    function CommentFactoryFunction($resource){
      return $resource("https://gigmappr.herokuapp.com/comments/:id", {}, { update: {method: "PUT"}
    });
  }

}());
