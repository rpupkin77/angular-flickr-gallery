angular.module('flickrFilters', []).filter('medium_image', function(){
return function(input)
{
return input.replace("_m.", "_q.");
};
})