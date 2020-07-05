document.addEventListener('keydown', e => {
  const keys = document.querySelectorAll('.btn');
  keys.forEach(key => {
    if (e.keyCode === Number(key.id)) {
      key.classList.add('active');
      setTimeout(() => {
        key.classList.remove('active');
      }, 150);
    }
  });
});
