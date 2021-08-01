function validateEmail(email){
    // all variables
    const regExp =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    let validEmail = regExp.test(email);

    let error = document.getElementById('error')
    error.style.color = "red";

    let success = document.getElementById('success')
    success.style.color = 'green'

    let msgError = []
    let msgSuccess = []
    // function with true or false 
    if(validEmail == true) { 
        let email = document.getElementById('email');
        email.style.border = '2px solid hsl(120,72%,52%)' 
        let icon = document.getElementById('icon')   
        icon.style.display = 'none'
        msgSuccess.push('Submitted succesfully !!')
    } else {
        let email = document.getElementById('email');
        email.style.border = '2px solid hsl(0,100%,50%)'
        let icon = document.getElementById('icon')
        icon.style.display = "inline-block"
        msgError.push("Please provide a valid email !!")
    }

    error.innerHTML = msgError.join('')
    success.innerHTML = msgSuccess.join('')

}
