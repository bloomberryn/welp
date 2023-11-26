function showShyGif() {
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");
    const noBtn = document.querySelector(".no-btn");

    question.innerHTML = "Yeeyyyyy I wuvv youuu!";
    gif.src = "shy.gif";
    noBtn.disabled = true; // Disable the 'No' button after 'Yes' is clicked
}

function moveNoButton() {
    const noBtn = document.querySelector(".no-btn");
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}
