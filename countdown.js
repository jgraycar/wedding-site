function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  let globalTimeInterval;

  function updateClock() {
    const t = getTimeRemaining(endtime);
    clock.innerHTML = t.days + ' days, ' +
      t.hours + ' hours, ' +
      t.minutes + ' minutes, and ' +
      t.seconds + ' seconds until the big day!';
    if (t.total <= 0) {
      clearInterval(globalTimeInterval);
    }
  }

  updateClock();
  globalTimeInterval = setInterval(updateClock, 1000);
}
