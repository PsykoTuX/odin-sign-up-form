let password = document.getElementById('password');
let passwordConfirmation = document.getElementById('passwordConfirmation');
let error = document.getElementsByClassName('error')[0];

 passwordConfirmation.addEventListener('input',() => {
match()
 })

 password.addEventListener('input',() => {
    match()
     })


function match() {
 password=password;
 passwordConfirmation=passwordConfirmation
 console.log(password.value);
 console.log(passwordConfirmation.value);
 if (password.value != passwordConfirmation.value) {
 password.classList.add('invalid');
 passwordConfirmation.classList.add('invalid');
 error.classList.remove('error');
 } else {
     password.classList.remove('invalid');
     passwordConfirmation.classList.remove('invalid');
     error.classList.add('error');
     password.classList.add('valid');
     passwordConfirmation.classList.add('valid');
 }
}