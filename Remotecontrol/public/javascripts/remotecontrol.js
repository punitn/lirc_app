var app = angular.module('Remotecontrol', ['ngResource', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        })
        .when('/device/:id', {
        	templateUrl: 'partials/device-details.html',
        	controller: 'DeviceDetailCtrl'
    	})
        .otherwise({
            redirectTo: '/'
        });
}]);
app.controller('HomeCtrl', ['$scope', '$resource', 
    function($scope, $resource){
    	var Devices = $resource('/api/devices');
        Devices.query(function(devices){
            $scope.devices = devices;
        });
    }]);
app.controller('DeviceDetailCtrl', ['$scope', '$resource', '$location', '$routeParams',
    function($scope, $resource, $location, $routeParams){
    
    	var DeviceDetails = $resource('/api/devices/:id');
        
        DeviceDetails.query({ id: $routeParams.id }, function(deviceDetails){
            $scope.deviceDetails = deviceDetails;
        });
        
    }]);