//contact window
let overlayMenu = document.querySelector('#content');
let subscribeOpen = document.querySelector('#button');
let formSelect = document.querySelector('#form');
let subscribeClose = document.querySelector('#subscribe');

subscribeOpen.addEventListener('click', function(){
  overlayMenu.classList.add('showForm');
  formSelect.classList.remove('disable');
})
