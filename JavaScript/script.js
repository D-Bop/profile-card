function updateTimeStamp() {
    const date = Date.now();
    const currentMilliseconds = document.querySelector("[data-testid='test-user-time']")
    currentMilliseconds.textContent = `Current Time: ${date} ms`
}

updateTimeStamp();
setInterval(updateTimeStamp, 800);