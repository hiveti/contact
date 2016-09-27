var contactApp = angular.module('contactApp');

contactApp.controller('contactController', function ($scope) {

    $scope.listContacts = [
        {   name:'Raquel',
            fone:'987173448'
        },
        {
            name:'Deivison',
            fone:'985823198'
        }
    ];

    $scope.adicionar = function(){
        $scope.listContacts.push({
            name : $scope.name,
            fone : $scope.fone

        });
    };

    $scope.destroy = function (index) {
        $scope.listContacts.splice(index, 1);
    };

    $scope.edit = function(index) {
        $scope.name = $scope.listContacts[index].name;
        $scope.fone = $scope.listContacts[index].fone;
    };

});