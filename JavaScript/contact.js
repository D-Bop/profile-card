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

    const messageInput = document.querySelector("[data-testid='test-contact-message']")

    if(messageInput.value.trim() === "") {
        isValid = false;
        messageError.textContent = "Please enter a valid message"
        messageError.classList.add("errorMessage")
        messageInput.classList.add("errorBorder")
    } else if (messageInput.value.length < 10) {
        isValid = false;
        messageError.textContent = "Message must be more than 10 characters"
        messageError.classList.add("errorMessage")
    }

    if (name.value === "") {
        nameError.classList.add("errorMessage");
        name.classList.add("errorBorder")
        nameError.textContent = "Please input your name!"
        isValid = false;
    }

    const emailValue = email.value.trim();
    if (!emailValue){
        emailError.classList.add("errorMessage")
        emailError.textContent = "Email is required"
        email.classList.add("errorBorder")
        isValid = false;
    } else if(!emailRegex.test(emailValue)) {
        emailError.classList.add("errorMessage")
        email.classList.add("errorBorder")
        emailError.textContent = "Please enter a valid email"
        isValid = false;
    }

    if (subject.value === "") {
        subjectError.textContent = "Please enter a valid Subject"
        subjectError.classList.add("errorMessage")
        subject.classList.add("errorBorder")
        isValid = false;
    }




    
    if(isValid) {
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