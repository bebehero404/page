const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesButton = document.querySelector(".yes-button");
const noButton = document.querySelector(".no-button");


yesButton.addEventListener("click", () => {
    question.innerHTML = "Aaaaaa, I like you too";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

noButton.addEventListener("mouseover", () => {
    const noBtnReact = noButton.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnReact.width;
    const maxY = window.innerHeight - noBtnReact.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
});
