var shoppingList = [
	
	{	name: "milk",
		price: 3.49
	},
	
	{	name: "bread",
		price: 2.99
	},
	
    {  name: "apples",
		price: 4.37
	}
   
 ];

var itemTotal = 0;

shoppingList.forEach(function(list) {
	console.log(list.name + " $" + list.price.toFixed(2))
});

shoppingList.forEach(function(getTotal) {
  itemTotal += getTotal.price
});

console.log("Total: " + "$" + itemTotal.toFixed(2));

/*Using for loop:

function totalPrice() {
	var itemTotal = 0;
	for(var i = 0; i < shoppingList.length; i++) {
    itemTotal += shoppingList[i].price;
  }
   return itemTotal;
}

console.log("Total: $" + totalPrice());*/

