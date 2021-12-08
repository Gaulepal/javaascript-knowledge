//data
let friend1 = {
  name: 'Rajan',
  profession: 'Electrical Engineer',
  printDetail: function () {
    document.body.innerHTML = this.name;
  },
};
//lets create another object
let friend2 = {
  name: 'Sita Ram',
  profession: 'Artist',
  printDetail: function () {
    document.body.innerHTML = this.name;
  },
};

//call
friend1.printDetail();
friend2.printDetail();
