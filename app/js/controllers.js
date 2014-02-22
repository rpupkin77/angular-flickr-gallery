

var flickrgalleryControllers = angular.module("flickrgalleryControllers", []);

flickrgalleryControllers.controller("MainGalleryCtrl", ['$scope', '$http', function($scope, $http){
    
    $scope.tag ="newburyport";
    var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags="+$scope.tag+"&tagmode=any&size=m&format=json&jsoncallback=JSON_CALLBACK";
    
    
    //load the flickr images via the url var
    $http.jsonp(url).success(function(data){
        $scope.set = {
            photos: data.items,
            length: data.items.length
        }
        $scope.current = 0;
        $scope.displayCurrent = 1;
        $scope.setMainImage($scope.set.photos[0])
        
    })
    
    $scope.setCurrent = function(val){
        $scope.current = val;
        $scope.displayCurrent = val+1;
        
        $scope.setMainImage($scope.current);
    }
    
    //moves the image through the gallery based on n
    $scope.moveImage = function(n)
    {
       var new_current = $scope.current + n;
        
        if(new_current == $scope.set.length)
        { 
            new_current = 0;
        }
        else if(new_current < 0)
        {
            new_current = ($scope.set.length-1);
        }
        
        $scope.setCurrent(new_current);
    }
    
    //sets the main image
    $scope.setMainImage = function(){
        image = $scope.set.photos[$scope.current];
        $scope.main_image= {
            
            url:image.media.m.replace("_m.", "_b."),
            tags:image.tags
            
        };
    };
}]);