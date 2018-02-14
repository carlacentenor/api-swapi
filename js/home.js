let btnWelcome = $('#btn-welcome');
let  imagesBox = $('.images-box');

btnWelcome.on('click',function(){
  window.location.href = '../views/home.html';
});

// función para ingresar imágenes




function getPersonage() {
  const personageStar = new XMLHttpRequest();
  personageStar.onreadystatechange = function() {
    if (personageStar.readyState === 4 && personageStar.status === 200) {
      const data = JSON.parse(this.responseText);
      console.log(data);
    }
  };
  personageStar.open('GET', `https://swapi.co/api/people/`);
  personageStar.send();
}

getPersonage();