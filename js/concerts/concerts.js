'use strict';

(function(){
  angular
  .module("concerts", ["ngResource", 'uiGmapgoogle-maps', 'ngSanitize'])
  .config(['uiGmapGoogleMapApiProvider', function(GoogleMapApi) {
        // NHO: great place for a code comment for future you
        GoogleMapApi.configure({
          v: '3.17',
          china: true // NHO: can't forget about china
        });
    }]);

}());
