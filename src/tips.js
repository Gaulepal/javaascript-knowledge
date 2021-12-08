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
function createData(newData, callback) {
  setTimeout(() => {
    //let push newData parameter to data
    data.push(newData);
    callback(); //this is callback
  }, 2000);
}

//call func with pass new data => now lets pass getData as callback
createData(
  {
    name: 'Dinesh',
    profession: 'Electrician',
  },
  getData
);

//call function
// getData();
