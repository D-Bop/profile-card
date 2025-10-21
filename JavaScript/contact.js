console.log("console is working now")

const form = document.getElementById("form")
const name = document.getElementById("name")
const emailValue = document.querySelector("[data-testid='test-contact-email']").value
console.log(emailValue)
const emailError = document.querySelector("[data-testid='test-contact-error-email']")
const subject = document.getElementById("subject")
const message = document.getElementById("message")
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("form submitted")
    if (name.value === "") {
        const nameError = document.querySelector("[data-testid='test-contact-error-name']");
        nameError.classList.add("errorMessage");
        name.classList.add("errorBorder")
        nameError.innerHTML = `<p>Please input your name!</p>    `
        console.log("name is empty")
    }

    if (!emailValue){

        console.log(emailValue)
        
        emailError.classList.add("errorMessage")
        emailError.innerHTML = `<p>Email is required</p>`
        
        email.classList.add("errorBorder")
    } else if(!emailRegex.test(emailValue)) {
        emailError.classList.add("errorMessage")
        emailError.innerHTML = `<p>Please enter a valid email</P>`
        console.log("Email is not valid")
    }

    if (subject.value === "") {
        const subjectError = document.querySelector("[data-testid='test-contact-error-subject']")
        subjectError.innerHTML = `<p>Please enter a valid Subject</p>`
        subjectError.classList.add("errorMessage")
        subject.classList.add("errorBorder")
    }
})