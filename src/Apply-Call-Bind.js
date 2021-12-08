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

//function => now lets pass the city as parameter
function printDetail(city, country) {
  console.log(this, city, country);
}

//*Here comes the concept of Call() function because as we notice that we're writing the same function printDetail() in two objects
//when we use `this` keyword within the object then it points the same object
//lets write the function in friend1 and access for both objects
// friend1.printDetail.call(friend2.profession);
//this is also called function borrow

//* now lets say we have function outside the object
//we can call the function and pass the object
printDetail.call(friend1.name, 'Chitwan', 'Nepal');
printDetail.call(friend2.name, 'Bharatpur');

//lets use Apply() method instead of Call()
printDetail.apply(friend1, ['Bharatpur', 'Nepal']); //here we can pass as an array

//* lets see how we can work with Bind() func
//basically bind is like call() func but we should not call it directly, we make a copy and call or invoke when we need

//lets store in a variable and call it at the bottom => as we can see that we can store in variable and invoke when we need
let funWithFriend = printDetail.bind(friend1.name, 'Pokhara', 'Nepal');
funWithFriend();
