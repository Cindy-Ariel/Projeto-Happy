//create map
const map = L.map("mapid").setView([-19.9182312, -44.0000836], 11);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  IconAnchor: [29, 68],
});

let marker;

//create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remover icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//adicionar o campo de fotos
function addPhotoField() {
  // pegar o container de fotos #images.
  const container = document.querySelector("#images");
  // pegar o container para duplicar .new-upload.
  const fildsContainer = document.querySelectorAll(".new-upload");
  // realizaqr o clone da útima imagem adicionada.
  const newFieldContainer =
    fildsContainer[fildsContainer.length - 1].cloneNode(true);
  //verificar se o campo está vazio, se sim, não adicionar ao container de imagens.
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  //  limpar o campo antes de adicionar ao container de imagens

  // .value =""
  input.value = "";

  // adicionar o clone ao container de #images.
  container.appendChild(newFieldContainer);
}
function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    //limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }
  span.parentNode.remove();
}

// troca do sim e não
function toggleSelect(event) {
  // retirar a class. active (dos botões)
  document.querySelectorAll(".button-select button")
  .forEach(function(button){
    button.classList.remove('active')
  })
  

  //colocar a class .active nesse botão clicado

  const button = event.currentTarget
  button.classList.add('active')

  // atualizar o meu inport hidden com o cvalor selecionado

  const input = document.querySelector('[name=open_on_weekends]')
  
  input.value = button.dataset.value
}
