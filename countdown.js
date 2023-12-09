// countdown.js

// Function to start the New Year countdown
function startCountdown() {
    const countdownContainer = document.getElementById("countdown-container");

    // Set the date we're counting down to
    const countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

    // Update the countdown every 1 second
    const x = setInterval(function() {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the remaining time
        const distance = countDownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            countdownContainer.innerHTML = "Happy New Year!";
        }
    }, 1000);
}

// Call the startCountdown function when the window loads
window.onload = function() {
    startCountdown();
};

