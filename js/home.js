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
      
      resultLength = data.results.length;
      personageStar.onload = addPersonage(dataArray);
      personageStar.onerror = handleError;
    }
  };
  personageStar.open('GET', `https://swapi.co/api/people/`);
  personageStar.send();
}

addPersonage = (array) => {
  array.forEach((element,index) => {
    
    const template = `
    <div class="col-4 col-lg-2 p-0 stars" data-name="${index+1}" data-toggle="modal" data-target="#exampleModal">
    
    <img class ="w100" src="https://starwars-visualguide.com/assets/img/characters/${index+1}.jpg" name="${element.name}">
    </div>
    `;
    imagesBox.append(template);
   
  })
};


handleError = error => {
  console.log(error);
};

getPersonage();

$(document).on('click', '.stars', function() {
  let value = $(this).data('name');
  getInfo(value);
});


getInfo = (value) => {
  const infoStars = new XMLHttpRequest();
  infoStars.onreadystatechange = function() {
    if (infoStars.readyState === 4 && infoStars.status === 200) {
      const dataInfo = JSON.parse(this.responseText);
     
      
      infoStars.onload = info(dataInfo,value);
      infoStars.onerror = handleError;
    }
  };
  infoStars.open('GET', `https://swapi.co/api/people/${value}`);
  infoStars.send();
}

function info(data,value){
  
  let name = $('.modal-title');
  let gender = $('.gender');
  let height = $('.height');
  let bday = $('.birthday');
  let eye = $('.eye');
  let hair = $('.hair');
  let films = $('.films');
  let photo = $('.star-photo');
  name.text(data.name);
  gender.text(data.gender);
  height.text(data.height);
  bday.text(data.birth_year);
  eye.text(data.eye_color);
  hair.text(data.hair_color);
  films.text(data.films.length);
  photo.attr('src',`https://starwars-visualguide.com/assets/img/characters/${value}.jpg`)
}

