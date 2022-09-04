init();
loadBreedsList();
$('#title').click(function () {
  init();
});

function init() {
  // hide dog breed name portion
  $('#breed-name').hide();

  // remove dog breed images
  const imgs = document.querySelectorAll('img');
  imgs.forEach((img) => img.remove());

  // remove clicked button's background color
  $('button').css('background-color', '');

  // scroll to the top
  window.scrollTo(0, 0);
}

function loadBreedsList() {
  const BREEDS_LIST_API = 'https://dog.ceo/api/breeds/list/all';
  fetch(BREEDS_LIST_API)
    .then((response) => response.json())
    .then((responseJSON) => {
      const breedsObject = responseJSON.message;
      const breedsArray = Object.keys(breedsObject);

      breedsArray.forEach((breed) => {
        // skip 'mix' breed
        if (breed === 'mix') {
          return;
        }

        const sidebar = document.querySelector('#sidebar');

        const subBreeds = breedsObject[breed];
        if (subBreeds.length !== 0) {
          subBreeds.forEach((subBreed) => {
            const btn = document.createElement('button');
            btn.value = `${breed}/${subBreed}`;
            btn.innerText = `${breed}_${subBreed}`;
            btn.innerText = breeds[btn.innerText].translation;
            btn.classList.add('btn');
            sidebar.appendChild(btn);
            btn.addEventListener('click', btnClick);

            // for the creation of breeds.js sake
            $('#temp').append(`${btn.innerText} : {translation:'',source:''},`);
          });
        } else {
          const btn = document.createElement('button');
          btn.value = breed;
          btn.innerText = breed;
          btn.innerText = breeds[btn.innerText].translation;
          btn.classList.add('btn');
          sidebar.appendChild(btn);
          btn.addEventListener('click', btnClick);

          // for the creation of breeds.js sake
          $('#temp').append(`${btn.innerText} : {translation:'',source:''},`);
        }
      });
    });
}

function btnClick(event) {
  init();
  $(event.target).css('background-color', 'rgb(161, 232, 208)');
  displayBreedName(event);
  displayDogImagesByBreed(event.target.value);
}

function displayBreedName(event) {
  // show spinner
  $('#logo').addClass('spin');

  $('#breed-name').show();
  const breedName = document.querySelector('#breed-name');
  breedName.innerText = event.target.innerText;

  const source = document.querySelector('#source');
  source.href = breeds[event.target.value.replace('/', '_')].source;
}

async function displayDogImagesByBreed(breed) {
  const BREED_IMAGES_API = `https://dog.ceo/api/breed/${breed}/images`;
  const response = await fetch(BREED_IMAGES_API);
  const responseJSON = await response.json();

  const imgURLs = responseJSON.message;
  imgURLs.forEach((imgURL) => {
    const img = document.createElement('img');
    img.src = imgURL;
    if (breed.includes('/')) {
      img.alt = breeds[breed.replace('/', '_')].translation;
    } else {
      img.alt = breeds[breed].translation;
    }

    img.classList.add('dog-img');
    document.querySelector('#display').appendChild(img);

    // hide spinner
    img.addEventListener('load', function () {
      $('#logo').removeClass('spin');
    });
  });
}
