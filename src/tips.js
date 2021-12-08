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

    data.forEach((person) => {
      result += `<li>${person.name}</li>`;
    });

    //write in DOM
    document.body.innerHTML = result;
  }, 1000);
}

//call function
getData();
