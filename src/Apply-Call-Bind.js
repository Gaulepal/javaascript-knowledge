//data
let friend1 = {
  name: 'Rajan',
  profession: 'Electrical Engineer',
};
//lets create another object
let friend2 = {
  name: 'Sita Ram',
  profession: 'Artist',
};

//function

function printDetail() {
  console.log(this);
}

//*Here comes the concept of Call() function because as we notice that we're writing the same function printDetail() in two objects
//when we use `this` keyword within the object then it points the same object
//lets write the function in friend1 and access for both objects
// friend1.printDetail.call(friend2.profession);
//this is also called function borrow

//* now lets say we have function outside the object
//we can call the function and pass the object
printDetail.call(friend1);
printDetail.call(friend2);
