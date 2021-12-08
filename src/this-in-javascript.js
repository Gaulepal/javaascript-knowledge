const MyObject = {
  name: 'Clown',
  face: '🤡',
  age: 99,

  //define hello as `key` and anonymous func as `value`
  hello: function () {
    console.log(this);
  },

  //define hello as `key` and anonymous Arrow func as `value`
  helloArrow: () => {
    console.log(this);
  },
};

MyObject.hello();
MyObject.helloArrow();

//helloArrow func does not have binding and it bypasses the MyObject and it becomes the global objects which is undefined
