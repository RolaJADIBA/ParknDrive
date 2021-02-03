var myApp = angular.module("myHouses",['lbServices']);
myApp.controller("myHouseController",function($scope, $http, House){
    $scope.houses = House.find(); 

    $scope.newHouse = '';

    $scope.pushHouse = function() {
        if($scope.newHouse != ""){
            House.create({name: $scope.newHouse}).$promise.then(function(name){
                $scope.houses.push(name);
                $scope.newHouse = '';
            })
        }
    } 
  
    $scope.deleteHouse = function(index){
        House.deleteById({id: $scope.houses[index].id}).$promise.then(function(){
            $scope.houses.splice(index, 1);
        })
    }
  
})

