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
  }, 3000);
}

//function => take newData and callback as parameters
function createData(newData, callback) {
  setTimeout(() => {
    //let push newData parameter to data
    data.push(newData);
  }, 2000);
}

//call func with pass new data
createData({
  name: 'Dinesh',
  profession: 'Electrician',
});

//call function
getData();
