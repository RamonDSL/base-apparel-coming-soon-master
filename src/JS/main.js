const email = document.getElementById('email')
const btn = document.querySelector('button')
const icon = document.querySelector('i')
const error = document.querySelector('small')
const form = document.querySelector('form')

function validateForm() {    
    const emailValue = email.value
    if (emailValue === "") {
        setError("Campo Obrigatório")
    } else if (!isEmail(emailValue)){
        setError("Digite um email válido")
    } else { 
        setSuccesse() 
    }
}

function setError(mensage) {
    btn.classList.add('active')
    icon.classList.add('active')
    email.classList.add('active')
    error.classList.add('active')
    error.innerHTML = mensage
}

function setSuccesse() {
    btn.classList.remove('active')
    icon.classList.remove('active')
    email.classList.remove('active')
    error.classList.remove('active')
    error.innerHTML = ""
}

function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email)
}

form.addEventListener('submit', event => {
    event.preventDefault()
    validateForm()
})
email.addEventListener('blur',validateForm)
email.addEventListener('invalid', e => {e.preventDefault()})