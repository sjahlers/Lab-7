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

shoppingList.forEach(function(food) {
	console.log(food.name + " $" + food.price)
});

function totalPrice() {
	var itemTotal = 0;
	for(var i = 0; i < shoppingList.length; i++) {
    itemTotal += shoppingList[i].price;
  }
   return itemTotal;
}

console.log("Total: $" + totalPrice());