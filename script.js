window.addEventListener('load', function() {
  var birthdate = new Date('1995-03-09');

  var currentDate = new Date();

  // Calculate the age
  var age = currentDate.getFullYear() - birthdate.getFullYear();

  // Check if the birthday has already occurred this year
  if (currentDate.getMonth() < birthdate.getMonth() || (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
    age--;
  }

  // Update the HTML element with the calculated age
  var ageElement = document.getElementById('age');
  ageElement.textContent = age;
});

