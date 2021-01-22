//Github repo



//problem 1 : kilometerToMeter

function kilometerToMeter(distanceInKm) {

    if (distanceInKm >= 0) {
        var distanceInMeter = distanceInKm * 1000;
        return distanceInMeter;
    }
    else {
        var errorMsg = "Distance can not be negative!";
        return errorMsg;
    }

}




//problem 2 budgetCalculator

function budgetCalculator(watch, mobile, laptop) {

    if (watch >= 0 && mobile >= 0 && laptop >= 0) {

        const watchPrice = 50;
        const mobilePrice = 100;
        const laptopPrice = 500;

        var watchCost = watchPrice * watch;
        var mobileCost = mobilePrice * mobile;
        var laptopCost = laptopPrice * laptop;

        var totalCost = watchCost + mobileCost + laptopCost;
        return totalCost;
    } else {
        var errorMsg = "Number of watch/mobile/laptop can not be negative!";
        return errorMsg;
    }

}





//problem 3  hotelCost

function hotelCost(numOfDay) {
    var rate1 = 100;
    var rate2 = 80;
    var rate3 = 50;
    if (numOfDay > 0 && numOfDay <= 10) {
        var totalRent1 = numOfDay * 100;
        return totalRent1;
    }
    else if (numOfDay == 0) {
        return 0;
    }
    else if (numOfDay < 0) {
        var msg = "Please enter a valid input!";
        return msg;
    }
    else if (numOfDay > 0 && numOfDay <= 20) {

        var totalRent2 = (10 * 100) + 80 * (numOfDay - 10);
        return totalRent2;
    }
    else if (numOfDay > 0 && numOfDay > 20) {
        var totalRent3 = (10 * 100) + (80 * 10) + (50 * (numOfDay - 20));
        return totalRent3;
    }

    else {
        var msg = "Please enter a valid input!";
        return msg;
    }

}




//problem 4  megaFriend  
function megaFriend(friendsArray) {
    var largestName = "";

    friendsArray.forEach(function (friendNmae) {
        if (friendNmae.length > largestName.length) {
            largestName = friendNmae;
        }
    });

    return largestName;
}






