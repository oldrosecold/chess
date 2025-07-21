

function getMilitaryHour() {
  const now = new Date();
  const hours = now.getHours();
  return hours.toString().padStart(2, '0'); 
}

const militaryHour = getMilitaryHour();
const militaryHourNumber = parseInt(militaryHour, 10); // Convert string to number

if (militaryHourNumber < 12) {
  alert('Good morning!');
} else if (militaryHourNumber < 18) {
  alert('Good afternoon!');
} else {
  alert('Good evening!');
}



document.addEventListener('DOMContentLoaded', function() {
  const colorPicker = document.getElementById('colorPicker');
  const body = document.body;



  colorPicker.addEventListener('input', function() {
    const chosenColor = colorPicker.value;
    console.log("The chosen color is " + chosenColor);
    body.style.color = chosenColor;
  });
});

button = document.querySelector('#submit');
button.addEventListener('click', () => {
  nameBox = document.getElementById("test");

  
  username = nameBox.value;
  alert("Welcome to our website " + username);
  
});
