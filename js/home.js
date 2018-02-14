let btnWelcome = $('#btn-welcome');
let  imagesBox = $('.images-box');

btnWelcome.on('click',function(){
  window.location.href = '../views/home.html';
});

// función para ingresar imágenes
(function() {
  images.forEach(function(element,index){
    const template = `<div class="col-3 p-2 border text-center data-name="${index+1}">
                      <img class="w100" src="../assets/images/${element}.png" alt="${index+1}"></div>`;
      imagesBox.append(template);
  }); 
})();



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