const dayTill = document.querySelector(".days");
const hoursTill = document.querySelector(".hours");
const minutesTill = document.querySelector(".min");
const secondsTill = document.querySelector(".sec");

const daysLeft = function () {
  const now = Date.now();
  const daysTill = new Date("December 25, 2023 00:00:00").getTime();
  const timeGap = daysTill - now;

  const sec = 1000;
  const min = sec * 60;
  const h = min * 60;
  const day = h * 24;

  const textDay = Math.floor(timeGap / day);
  const textHour = Math.floor((timeGap % day) / h);
  const textMin = Math.floor((timeGap % h) / min);
  const textSec = Math.floor((timeGap % min) / sec);

  dayTill.textContent = `${textDay}`;
  hoursTill.textContent = `${textHour}`;
  minutesTill.textContent = `${textMin}`;
  secondsTill.textContent = `${textSec}`;
};
setInterval(daysLeft, 1000);
