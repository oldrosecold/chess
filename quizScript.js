button = document.querySelector('#submit');
button.addEventListener('click', () => {
  nameBox = document.querySelector("#test");


  username = nameBox.value;
  alert("Welcome to my website " + username);

});
