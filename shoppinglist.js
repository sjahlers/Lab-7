var shoppingList = [
	
	{	name: "milk",
		price: 3
	},
	
	{	name: "bread",
		price: 2
	},
	
    {  name: "apples",
		price: 5
	}
   
 ];

var itemTotal = 0

shoppingList.forEach(function(list) {
	console.log(list.name + " $" + list.price)
});

shoppingList.forEach(function(getTotal) {
  itemTotal += getTotal.price
});

console.log("Total: " + "$" + itemTotal);

/*Using for loop:

function totalPrice() {
	var itemTotal = 0;
	for(var i = 0; i < shoppingList.length; i++) {
    itemTotal += shoppingList[i].price;
  }
   return itemTotal;
}

console.log("Total: $" + totalPrice());*/

