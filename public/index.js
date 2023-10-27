const floatingHearts = document.querySelector('.floating-hearts');
floatingHearts.style.position = 'relative';
floatingHearts.style.top = '-50%';
floatingHearts.style.transform = 'scale(0.5)';
setTimeout(startHearts, 2000);

let heartNum = 0;
function startHearts() {
  while (heartNum < 25) {
    // horTranslate will be used with 'vw' in css for percentage of view width
    setTimeout(() => {
      const horTranslate = 0.5 * (Math.random() - 0.5);
      const heart = document.createElement('img');
      heart.src = 'assets/heart-icon-48.png';
      heart.alt = 'heart';
      heart.style.position = 'absolute';
      heart.style.top = '50%';
      heart.style.left = '50%';
      heart.style.transform = 'translate(-50%, -50%)';
      heart.style.zIndex = 0;
      floatingHearts.appendChild(heart);
      heart.animate([]);
    }, 250 * heartNum);
    heartNum += 1;
  }
}
