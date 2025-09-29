    let coins = 0;
    const coinCount = document.getElementById("coin-count");
    const clickCircle = document.getElementById("click-circle");

    clickCircle.addEventListener("click", () => {
      if (coins < 10) {
        coins += 1;
      } else if (coins >= 10 && coins <= 100) {
        coins += 2;
      } else {
        coins += 5;
      }
      coinCount.textContent = coins;
    });