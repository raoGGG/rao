const cards = document.querySelectorAll('.movie-card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h2').textContent;
    alert(`You clicked "${title}"!`);
  });
});
