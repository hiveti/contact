var contactApp = angular.module('contactApp');

contactApp.controller('contactController', function () {

    var self = this;

    self.listContacts = [
        {   name:'Raquel',
            fone:'987173448'
        },
        {
            name:'Deivison',
            fone:'985823198'
        }
    ];

    self.adicionar = function(){
        self.listContacts.push({
            name : self.name,
            fone : self.fone

        });
    };

    self.destroy = function (index) {
        self.listContacts.splice(index, 1);
    };

    self.edit = function(index) {
        self.index = index;
        self.name = self.listContacts[index].name;
        self.fone = self.listContacts[index].fone;
    };

    self.save = function () {
        self.listContacts[self.index].name = self.name;
        self.listContacts[self.index].fone = self.fone;
    }
});