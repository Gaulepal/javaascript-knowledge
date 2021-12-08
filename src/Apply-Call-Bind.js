//data
let friends = {
  name: 'Rajan',
  profession: 'Electrical Engineer',
  printDetail: function () {
    document.body.innerHTML = this.name;
  },
};

//call
friends.printDetail();

//call
// document.body.innerHTML = friends.map((person) => person.name);

//call function
// document.body.innerHTML = friends.map((person) => person.printDetail());
