//contact window
let overlayMenu = document.querySelector('#content');
let subscribeOpen = document.querySelector('#button');
let formSelect = document.querySelector('#form');
let subscribeClose = document.querySelector('#subscribe');

subscribeOpen.addEventListener('click', function(){
  overlayMenu.classList.add('showForm');
  formSelect.classList.remove('disable');
})

function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(55.676606,12.574734),
    zoom:5,
  };
  var map = new google.maps.Map(document.getElementById("map"),mapProp);
  }


