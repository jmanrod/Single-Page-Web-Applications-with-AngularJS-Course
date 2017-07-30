(function (){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ItemsService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ItemsService'];
function ToBuyController (itemsService){
    var toBuy = this;
    toBuy.itemsToBuy = itemsService.getItemsToBuy();
    toBuy.buyItem = function (index) {
        itemsService.buyItem(index);
    };
    console.log("todo en orden por aquí", toBuy.itemsToBuy);
}

AlreadyBoughtController.$inject = ['ItemsService'];
function AlreadyBoughtController (itemsService){
    var alreadyBought = this;
    alreadyBought.itemsBuyed = itemsService.getItemsBuyed();
    console.log("por aquí también");
}

function ShoppingListCheckOffService (){
    var itemsService = this;
    var itemsToBuy = initItems();
    var itemsBuyed = [];

    itemsService.buyItem = function (index){
        var item = itemsToBuy[index];
        itemsBuyed.push(item);
        itemsToBuy.splice(index,1);
    }

    itemsService.getItemsToBuy = function () {
        return itemsToBuy;
    }
    
    itemsService.getItemsBuyed = function () {
        return itemsBuyed;
    }
    console.log("por el servicio va perfecto");
}

function initItems() {
    var items = [
        { name: "oreo", quantity: 10 },
        { name: "kitkat", quantity: 5 },
        { name: "nutela", quantity: 10 },
        { name: "kinder", quantity: 10 },
        { name: "donuts", quantity: 10 },
        { name: "donetes", quantity: 10 },
        { name: "toblerone", quantity: 10 }
    ];
    return items;
}

})();