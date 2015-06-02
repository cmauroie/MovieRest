/*
*---http://www.sitepoint.com/creating-crud-app-minutes-angulars-resource/
*/

angular.module('movieApp', ['ui.router','ngResource','movieApp.controllers','movieApp.services'])
 
.config(function($stateProvider) {
  
  $stateProvider.state('movies', { // state for showing all movies
    url: '/movies',
    templateUrl: 'templates/movies.html',
    controller: 'MovieListController'
  })

  .state('viewMovie', { //state for showing single movie
    url: '/movies/:id/view',
    templateUrl: 'templates/movie-view.html',
    controller: 'MovieViewController'
  })

  .state('newMovie', { //state for adding a new movie
    url: '/movies/new',
    templateUrl: 'templates/movie-add.html',
    controller: 'MovieCreateController'
  })

  .state('editMovie', { //state for updating a movie
    url: '/movies/:id/edit',
    templateUrl: 'templates/movie-edit.html',
    controller: 'MovieEditController'
  });
}).run(function($state) {
  $state.go('movies'); //make a transition to movies state when app starts
});