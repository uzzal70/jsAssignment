
//****** Problem-1 ********
function seerToMon(seer)
{
    let mon = 0;
    if (typeof seer == 'number' && seer > 0) {
        mon = seer / 40;
    }
    else {
        return 'Please give a number and positive number';
    }
    return mon;
}
console.log(seerToMon(160));


//****** Problem-2 ********
function totalSales(item1, item2, item3)
{
    let total = 0;
    if (typeof (item1, item2, item3) == 'number' && (item1, item2, item3) > 0) {
        const shirt = 200;
        const pant = 300;
        const shoe = 500;
        const shirtTotal = shirt * item1;
        const pantTotal = pant * item2;
        const shoeTotal = shoe * item3;
        total = shirtTotal + pantTotal + shoeTotal;
    }
    else {
        return 'Please give the three items and positive number ';
    }
    return total;
}
const total = totalSales(0, 1, 1);
console.log(total);


//****** Problem-3 ********
function deliveryCost(items)
{
    let totalDelivary = 0;
    if (typeof items == 'number' && items > 0) {
        if (items <= 100) {
            totalDelivary = items * 100;
            // console.log(totalDelivary);
        }
        else if (items > 100 && items <= 200) {
            const items100 = 100 * 100;
            const restItems = items - 100;
            const restItemsTotal = restItems * 80;
            totalDelivary = items100 + restItemsTotal;
            // console.log(totalDelivary);
        }
        else if (items > 200) {
            const itemsLess100 = 100 * 100;
            const itemsLess200 = 100 * 80;
            const restLastItems = items - 200;
            const restLastItemsDelivery = restLastItems * 50;
            totalDelivary = itemsLess100 + itemsLess200 + restLastItemsDelivery;
            // console.log(totalDelivary);
        }
        else {
            console.log('nodelivary');
        }
    }
    else {
        return 'Please give a number and posetive number';
    }
    return totalDelivary;
}
const totalDelivaryCost = deliveryCost(201);
console.log(totalDelivaryCost);


//******* Problem 4 ******
function perfectFriend(fiveChar)
{
    const friendsName = ['Asik', 'Heamal', 'Samim', 'Mithu', 'Ariful', 'korim', 'Afzal Hossain'];
    let friend;
    for (let i = 0; i < friendsName.length; i++) {
        // console.log(friendsName[i]);
        if (typeof fiveChar == 'number' && fiveChar > 0) {
            if (friendsName[i].length == fiveChar) {
                const friendLatter = friendsName[i];
                friend = friendLatter;
                break;
            }
        }
        else {
            return 'Please give a number and positive number';
        }
    }
    return friend;
}
const friend = perfectFriend(5);
console.log(friend);
