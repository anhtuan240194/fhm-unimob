document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll('.position-recruit .recruit-card-item');

  const showMoreButton = document.querySelector('.show-more');
  let visibleItemCount = 10;
  let totalItems = items.length;

  for (let i = 0; i < visibleItemCount; i++) {
    items[i].style.display = 'flex';
  }

  showMoreButton.addEventListener('click', function () {
    if (visibleItemCount < totalItems) {
      for (let i = visibleItemCount; i < visibleItemCount + 10 && i < totalItems; i++) {
        items[i].style.display = 'flex';
      }
      visibleItemCount += 10;
      if (visibleItemCount > totalItems)
        showMoreButton.style.display = 'none';
    }
  });
});