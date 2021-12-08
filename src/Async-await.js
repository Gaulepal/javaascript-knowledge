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
      let error = false;
      //if there is no error then call the resolve function otherwise reject
      if (!error) {
        resolve();
      } else {
        reject('kuch kadbad hai bhai');
      }
    }, 2000);
  });
}

//async await function
async function start() {
  //call createData function
  await createData({ name: 'Dinesh', profession: 'Electrician' });
  //call function
  getData();
}

//call func
start();
