/* File that combines names and emails in a list
 to an an array of objects containing name and email as key-value pairs

 E.g: names = ["James", "John"]
      emails = ["james@yopmail.com", "john@yopmail.com"]

      Result = [{name: "James", email: "james@yopmail.com"}, {name: "John", email: "john@yopmail.com"}]
 */

    //   First list containing names separated by a new line
var list1 = ``;

//   Second list containing emails separated by a new line
var list2 = ``;

// Make list1 into a list and be seaprated by comma and trim whitespace
list1 = list1.split("\n").map((elem) => elem.trim());

// Make list2 into a list and be seaprated by comma and trim whitespace
list2 = list2.split("\n").map((elem) => elem.trim());

// Convert both arrays to an array of object with key-value pair
const combinedArray = list1.map((elem, index) => {
  return { name: elem, email: list2[index] };
});

//View result
console.log(combinedArray);
