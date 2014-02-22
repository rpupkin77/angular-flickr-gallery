var flickrgalleryApp = angular.module('flickrgalleryApp', [
'ngRoute',
'flickrFilters',
'flickrgalleryControllers'
]);

flickrgalleryApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'partials/main-gallery.html',
        controller: 'MainGalleryCtrl'
    }).otherwise({
        redirectTo: "/"
    });
}]);