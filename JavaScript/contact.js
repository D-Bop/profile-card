const form = document.getElementById("form")
const name = document.getElementById("name")
const email = document.querySelector("[data-testid='test-contact-email']")
const emailError = document.querySelector("[data-testid='test-contact-error-email']")
const subject = document.getElementById("subject")


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const nameError = document.querySelector("[data-testid='test-contact-error-name']");
    const subjectError = document.querySelector("[data-testid='test-contact-error-subject']");
    const messageError = document.querySelector("[data-testid='test-contact-error-message']");

    let isValid = true;

    if (name.value === "") {
        
        nameError.classList.add("errorMessage");
        name.classList.add("errorBorder")
        nameError.textContent = "Please input your name!"
        console.log("name is empty")
        isValid = false;
    }

    const emailValue = email.value.trim();
    console.log(`Email Value: ${emailValue}`)
    if (!emailValue){
        console.log("email is empty")
        emailError.classList.add("errorMessage")
        emailError.textContent = "Email is required"
        email.classList.add("errorBorder")
        isValid = false;
    } else if(!emailRegex.test(emailValue)) {
        emailError.classList.add("errorMessage")
        email.classList.add("errorBorder")
        emailError.textContent = "Please enter a valid email"
        console.log("Email is not valid")
        isValid = false;
    }

    if (subject.value === "") {
       console.log("subject is empty")
        subjectError.textContent = "Please enter a valid Subject"
        subjectError.classList.add("errorMessage")
        subject.classList.add("errorBorder")
        isValid = false;
    }

    const messageInput = document.getElementById("message")
    console.log(message) 
    console.log(messageInput.value)

    if(messageInput.value === "") {
        console.log(messageInput)
        console.log("message is empty")
        messageError.textContent = "Message can not be empty";
        messageError.classList.add("errorMessage")
        message.classList.add("errorBorder")
        isValid = false;
    } else if (message.value.length < 11) {
        console.log("message is too short")
        isValid = false;
        messageError.textContent = "Message should be at least 10 characters"
        messageError.classList.add("errorMessage")
        message.classList.add("errorBorder")
    }
    
    if(isValid) {
        console.log("successs")
        const successMessage = document.querySelector("[data-testid='test-contact-success']")
        successMessage.textContent = "Message Successfully submitted"
        successMessage.classList.add("success")
        form.reset()
        clearErrorMessage()

        setTimeout(() => {
            successMessage.classList.add("hidden")
        }, 7000)

        console.log(message.value)
    }

    function clearErrorMessage() {
        nameError.classList.remove("errorMessage")
        nameError.innerHTML = ``
        name.classList.remove("errorBorder")

        emailError.classList.remove("errorMessage")
        emailError.innerHTML = ``
        email.classList.remove("errorBorder")

        subjectError.classList.remove("errorMessage")
        subjectError.innerHTML = ``
        subject.classList.remove("errorBorder")

        messageError.classList.remove("errorMessage")
        messageError.innerHTML = ``
        message.classList.remove("errorBorder")
    }
})