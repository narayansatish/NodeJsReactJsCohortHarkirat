/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  let categoryWiseTotalPrice = {}; //{categoryName : spent}

  transactions.forEach((element) => {

    if (categoryWiseTotalPrice[element.category]) {

      categoryWiseTotalPrice[element.category] =

        categoryWiseTotalPrice[element.category] + element.price;

    } else {

      categoryWiseTotalPrice[element.category] = element.price;

    }

  });

  let resultList=[];
  Object.keys(categoryWiseTotalPrice).forEach(key => {
    resultList.push({ category: key, totalSpent: categoryWiseTotalPrice[key] });
    
  });

  return resultList;

}

module.exports = calculateTotalSpentByCategory;
