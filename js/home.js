let btnWelcome = $('#btn-welcome');
let imagesBox = $('#images-box');
btnWelcome.on('click',function(){
  window.location.href = '../views/home.html';
});

// función para ingresar imágenes

getPersonage = () => {
  const personageStar = new XMLHttpRequest();
  personageStar.onreadystatechange = function() {
    if (personageStar.readyState === 4 && personageStar.status === 200) {
      const data = JSON.parse(this.responseText);
      let dataArray = data.results;
      console.log(data);
      resultLength = data.results.length;
      personageStar.onload = addPersonage(dataArray);
      personageStar.onerror = handleError;
    }
  };
  personageStar.open('GET', `https://swapi.co/api/people/`);
  personageStar.send();
}

addPersonage = (array) => {
  array.forEach((element) => {
    const template = `
    <div>
    <p>${element.name}</p>
    </div>
    `;
    imagesBox.append(template);
    console.log(element.name);
  })
};

handleError = error => {
  console.log(error);
};

getPersonage();

