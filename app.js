const containerItems = document.querySelector('.container-items')
const form = document.querySelector('.email');
const emailInput = document.getElementById('email-input')
const button = document.querySelector('.btn');
const thankYou = document.querySelector('.thanks')
const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
form.addEventListener('submit', validateEmail)


let emailInputValue = document.getElementById('email-input').value
let isFormValid = false 



// function to validate input
const validateInput = function () {
  
 

  if(!emailRegex.test(emailInput.value)){
   emailInput.classList.add('invalid')
   emailInput.nextElementSibling.classList.remove('hidden')
   isFormValid = false
} else {
  emailInput.classList.remove('invalid')
  emailInput.nextElementSibling.classList.add('hidden')
  isFormValid = true
} 


}

emailInput.addEventListener('email-input', function () {
  validateInput()
})



function validateEmail (e) {

  e.preventDefault()
validateInput()
if(isFormValid){
containerItems.remove()
thankYou.classList.remove('hidden')

}
  
}

thankYou.addEventListener('click', remove)

function remove() {
  thankYou.remove()
  window.location.reload()
}



