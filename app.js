const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    let randomCode = "#" + randomNumber.toString(16);

    // Ensure the hex code is always 6 characters long
    while(randomCode.length < 7) {
        randomCode = randomCode.replace("#", "#0");
    }

    document.body.style.backgroundColor = randomCode;
    document.getElementById('color-code').innerText = randomCode;
}

// Attach the function as a callback without invoking it immediately
document.getElementById("btn").addEventListener("click", getColor);

// Initial color when the page loads
getColor();
