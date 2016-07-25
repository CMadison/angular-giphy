var app = angular.module('GiphyApp', [])

app.controller('GiphyCtrl', ['$scope', '$http', function($scope, $http) {
  console.log('App loaded successfully');

  // $scope.query = '';

// Api call for search
  $scope.getGifs = function() {
    $http.get('http://api.giphy.com/v1/gifs/search', {
// Api parameters
      params: {
        q: $scope.query,
        api_key: 'dc6zaTOxFJmzC',
        rating: 'r'
      }
    })
    .then(function success(res) {
      $scope.gifs = res.data.data;
      console.log($scope.query, "success");
      console.log('Odesza');
    }, function error(res) {
      console.log($scope.query, "Error");
    });
  }
  console.log('Gifs are cooler than emojis.');
}]);

// app.run(function() {
//   console.log('App has loaded!');
// });
