(function (){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController)

function LunchCheckController(){
  var lunch = this;
  lunch.itemsForLunch="";

  lunch.checkItemsForLunch = function(){
    lunch.itemsForLunchSplitted = lunch.itemsForLunch.split(",");
    if(lunch.itemsForLunchSplitted.length <= 0 || lunch.itemsForLunch===""){
      lunch.message = "Please enter data first";
    } else if (lunch.itemsForLunchSplitted.length <= 3){
      lunch.message = "Enjoy!";
    } else {
      lunch.message = "Too much!";
    }
    console.log("itemsForLunchSplitted", lunch.itemsForLunchSplitted);
  }
}

})();
