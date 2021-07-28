/*// define all the variables to use 
const form = document.querySelector('.form');
const input = document.querySelector('input')
const error_msg = document.querySelector('.error')
const error_icon = document.getElementById('#icon')

// define the check function
const validateEmail = (e) => {
    //e.preventDefault();
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        console.log("it's a correct email!!");
        error_icon.style.display = "none";
        error_msg.innerHTML = "";
    } else {
        console.log("not a correct email address");
        error_msg.innerHTML = "Please provide a valid email";
        error_msg.style.color = "hsl(0, 93%, 68%)";
        error_icon.style.display = "block";
    }
};
form.addEventListener("submit", validateEmail);