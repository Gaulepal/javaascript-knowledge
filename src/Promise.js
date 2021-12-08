const data = [
  {
    name: 'Kumar',
    profession: 'Software Engineer',
  },
  {
    name: 'Rajan',
    profession: 'Radio Jockey',
  },
  {
    name: 'Sita Ram',
    profession: 'Artist',
  },
];

//function
function getData() {
  setTimeout(() => {
    let result = '';

    data.map((person) => {
      result += `<li>${person.name}</li> <li>${person.profession}</li>`;
    });

    //write in DOM
    document.body.innerHTML = result;
  }, 1000);
}

//function => take newData and callback as parameters
function createData(newData) {
  //Promise returns if everything resolve if everything goes well otherwise it returns reject
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //let push newData parameter to data
      data.push(newData);
      //if error
      let error = true;
      //if there is no error then call the resolve function otherwise reject
      if (!error) {
        resolve();
      } else {
        reject('kuch kadbad hai bhai');
      }
    }, 2000);
  });
}

//call func with pass new data => now lets pass getData as callback
createData({
  name: 'Dinesh',
  profession: 'Electrician',
})
  .then(getData)
  .catch((error) => console.log(error));

//call function
// getData();
