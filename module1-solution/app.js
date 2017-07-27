(function (){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

function LunchCheckController(){
  var lunch = this;
  lunch.itemsForLunch="";

  lunch.checkItemsForLunch = function(){
    lunch.style='solid';
    lunch.itemsForLunchSplitted = clean(lunch.itemsForLunch.split(","));
    if(lunch.itemsForLunchSplitted.length <= 0 || lunch.itemsForLunch===""){
      lunch.message = "Please enter data first";
      lunch.color="red";
    } else if (lunch.itemsForLunchSplitted.length <= 3){
      lunch.message = "Enjoy!";
      lunch.color="green";
    } else {
      lunch.message = "Too much!";
      lunch.color="green";
    }
  }

  /**
  * Delete empty elements
  */
  function clean(array){
    var arrayTemp = new Array();
    for (var i = 0; i < array.length; i++) {
      if(array[i]){
        arrayTemp.push(array[i]);
      }
    }
    return arrayTemp;
  }
}

})();
