"use strict";  /* использование последней  версии  js  */

const getUserNames = use => {
  return use.map((names) => names.name);   // 1
}
console.log(getUserNames(users));

const getUsersWithEyeColor = (use, color) =>{
  return use.filter((item) => item.eyeColor === color);  // 2
}
console.log(getUsersWithEyeColor(users, "blue"));

const getUsersWithGender = (use, gender) => {
  return use
  .filter((item) => item.gender === gender)
  .map((names) => names.name);                           // 3
}
console.log(getUsersWithGender(users, "male"));

const getInactiveUsers = use => {
  return use.filter((item) => item.isActive === false);   // 4
}
console.log(getInactiveUsers(users));   

const getUserWithEmail = (use, em) => {
  return use.filter((item) => item.email === em);          // 5
}
console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));

const getUsersWithAge = (use, min, max) => {
  return use.filter((item) => item.age >= min && item.age <= max);      // 6
}
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

const calculateTotalBalance = use => {
  return use.reduce((acc, item) => acc + item.balance, 0);         // 7
}
console.log(calculateTotalBalance(users));

const getUsersWithFriend = (use, friendName) => {
  return use
  .filter((user) => user.friends.indexOf(friendName) !== -1)
  .map((user) => user.name);                                        // 8
}
console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));

const getNamesSortedByFriendsCount = use => {
  return use.sort((a, b) => a.friends.length - b.friends.length);    // 9
}
console.log(getNamesSortedByFriendsCount(users));

const getSortedUniqueSkills = use => {
  return use
  .reduce(
    (acc, curr) =>
    acc.concat(curr.skills.filter((item) => !acc.includes(item))),
    []
  )
  .sort((a, b) => a.localeCompare(b));                                     // 10
}
console.log(getSortedUniqueSkills(users));
