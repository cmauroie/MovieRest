/*The name of our factory is Movie. As we are using MongoDB, 
each movie instance has a property called _id. The rest is simple and straightforward.*/

angular.module('movieApp.services',[])

.factory('Movie',function($resource){
	return $resource('http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id',
		{ id : '@_id'},
		{update:{
			method:'PUT'
		}
	});
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});