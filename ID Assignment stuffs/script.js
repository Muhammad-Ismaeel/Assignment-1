const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages =[]
    if ( name.value === '' || name.value == null){
        messages.push('Please enter your name')
    }
    if ( email.value === '' || email.value == null){
        messages.push('Please enter your email')
    }
    if (messages.length>0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    

})