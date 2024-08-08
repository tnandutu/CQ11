const testForm = () => {
  const surname = document.textform.surname;
  let text = /^([A-Za-z]{1,15})*$/;
  if (!surname.value.match(text)){
    document.getElementById("surname-error").innerHTML = "please enter correct username";
    document.getElementById("surname-error").style = "color: red";
    surname.style.border = "1px solid red";
    return false;
  } 
  const firstName = document.textform.firstName;
  let firstNametext = /^([A-Za-z]{1,15})*$/;
  if (!firstName.value.match(firstNametext)){
    document.getElementById("firstName-error").innerHTML = "please enter firstName";
    document.getElementById("firstName-error").style = "color: red";
    firstName.style.border = "1px solid red";
    return false;
  } 
  const email = document.textform.email;
  let emailtext = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailtext)){
    document.getElementById("email-error").innerHTML = "please enter email";
    document.getElementById("email-error").style = "color: red";
    email.style.border = "1px solid red";
    return false;
  } 
  else {
    document.getElementById("message").innerHTML = "correct username";
    document.getElementById("message").style = "color: green";
    return true;

  }
}