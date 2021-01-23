// 01. kilometerToMeter------------------------------
function kilometerToMeter(kilometer){
     var meter = kilometer*1000;
    return meter;
}

// 02. budgetCalculator----------------------------
function budgetCalculator(clockNos,mobileNos,leptopNos){
    clockPrice = clockNos*50;
    mobilePrice = mobileNos*100;
    leptopPrice = leptopNos*500;
    totalBudget = clockPrice + mobilePrice + leptopPrice;
    return totalBudget;
}

// 03. hotelCost------------------------------------
function hotelCost(day){
    if(day<=10){
        cost = day*100;
    }else if(day<=20){
        var fristPart = 10*100;
        var remaining = day-10;
        var secondtPart = remaining*80;
        cost = fristPart + secondtPart;
    }else{
        var fristPart = 10*100;
        var secondtPart = 10*80;
        var remaining = day-20;
        var thirtPart = remaining*50;
        cost = fristPart + secondtPart + thirtPart;
    }
    return cost;
}

// 04. megaFriend-------------------------------------
function megaFriend(friendsName){
    var long =0;
    var longest;
    for(var i=0; i<friendsName.length; i++ ){
        if(friendsName[i].length>long){
            var long = friendsName[i].length;
            longest = friendsName[i];
        }
    }
    return longest;
}
