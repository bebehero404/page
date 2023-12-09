(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  // New Year countdown for 2024
  const countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

  const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    document.getElementById("days").innerText = Math.floor(distance / day);
    document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
    document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
    document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

    // do something later when date is reached
    if (distance < 0) {
      document.getElementById("headline").innerText = "Happy New Year 2024!";
      document.getElementById("countdown").style.display = "none";
      document.getElementById("content").style.display = "block";
      clearInterval(x);
    }
  }, 0);
})();
