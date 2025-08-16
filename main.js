document.querySelectorAll('.explore-list').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});
