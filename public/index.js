const floatingHearts = document.querySelector('.floating-hearts');
floatingHearts.style.position = 'relative';
floatingHearts.style.top = '-50%';
floatingHearts.style.transform = 'scale(0.5)';
const liftedHeart = document.querySelector('.lifted-heart');
liftedHeart.style.position = 'relative';
liftedHeart.style.top = '-50%';
liftedHeart.style.transform = 'scale(0.5)';
const numHearts = 15;
setTimeout(startHearts, 2000);

let heartNum = 0;
function startHearts() {
  document.querySelector('#splash').remove();
  while (heartNum < 15) {
    // horTranslate will be used with 'vw' in css for percentage of view width
    setTimeout(() => {
      const horTranslate = 0.75 * (Math.random() - 0.5);
      const heart = document.createElement('img');
      heart.src = 'assets/heart-icon-48.png';
      heart.alt = 'heart';
      heart.classList = 'heart';
      heart.style.position = 'absolute';
      heart.style.top = '50%';
      heart.style.left = '50%';
      heart.style.transform = 'translate(-50%, -50%)';
      heart.style.zIndex = 0;
      floatingHearts.appendChild(heart);
      heart.animate(
        [
          { offset: 0 },
          {
            transform: `scale(200%) translate(${100 * horTranslate}vw, -50vh)`,
            easing: 'ease-in',
            offset: 1,
          },
        ],
        { duration: 2000, fill: 'forwards' }
      );
    }, 250 * heartNum);
    heartNum += 1;
  }
  setTimeout(() => {
    floatingHearts.innerHTML = '';
  }, 2000 + 250 * numHearts);
  setTimeout(() => {
    const heart = document.createElement('img');
    heart.src = 'assets/heart-icon-48.png';
    heart.alt = 'heart';
    heart.classList = 'heart';
    heart.style.position = 'absolute';
    heart.style.top = '50%';
    heart.style.left = '50%';
    heart.style.transform = 'translate(-50%, -50%)';
    liftedHeart.appendChild(heart);
    heart.animate(
      [
        { opacity: 0.5, offset: 0 },
        {
          transform: 'scale(200%) translate(-25%, -10vh)',
          easing: 'ease-in',
          offset: 1,
        },
      ],
      { duration: 2000, fill: 'forwards' }
    );
  }, 500 + 250 * numHearts);
}
