let showButton = document.getElementById('showButton'),
    popup = document.getElementById('popup'),
    overlay = document.querySelector('.popup-overlay'),
    closeButton = document.getElementById('closeButton');
//Show Popup
showButton.addEventListener('click', function (){
  popup.style.display = "block";
});

overlay.addEventListener('click', hide);
closeButton.addEventListener('click', hide);

//Function to Hide Popup
function hide(){
  popup.style.display = "none";
}