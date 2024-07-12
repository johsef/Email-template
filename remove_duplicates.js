/* File that removes duplicate emails from a list of user objects */

// List of objects go in here, e.g {name: "James", email: "james@yopmail.com"}
const USERS = [];

// Function that removes duplicate values from an array of objects given a key in the objects
const removeDuplicates = (array, key) => {
  const seen = new Set();
  return array.filter((item) => {
    const value = item[key];
    if (seen.has(value)) {
      return false;
    } else {
      seen.add(value);
      return true;
    }
  });
};

// Removing duplicates emails from the list of users
const uniqueUsers = removeDuplicates(USERS, "email");
//Viewing the results using JSON.stringify to view large records
console.log(JSON.stringify(uniqueUsers));
