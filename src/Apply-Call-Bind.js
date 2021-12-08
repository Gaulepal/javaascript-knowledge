//data
let friends = [
  {
    name: 'Rajan',
    profession: 'Electrical Engineer',
    printDetail: function () {
      document.body.innerHTML = this.name;
    },
  },
  { name: 'Sita Ram', profession: 'Artist' },
  { name: 'Dinesh', profession: 'Electrician' },
  function printDetails() {
    console.log('function is being called');
  },
];

//call
// document.body.innerHTML = friends.map((person) => person.name);

//call function
document.body.innerHTML = friends.map((person) => person.printDetail());
