var user = { name: "person1", age: 5
 };
var user1 = { age: 5, name: "person1" };


function isEqual(user, user1) {
  
  var userKeys = Object.keys(user);
  var user1Keys = Object.keys(user1);
  
  console.log(user['name']);
  console.log(user['age']);
  console.log(user1['name']);
  console.log(user1['age']);

  if (userKeys.length != user1Keys.length) {
    return false;
  }

  for (var userKey of userKeys) {
    
    if (user[userKey] != user1[userKey]) {
      return false;
    }
  }

  return true;
}

console.log(isEqual(user, user1));