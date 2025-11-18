document.querySelectorAll('.tabs-item').forEach(tab => {
    tab.addEventListener('click', () => {
      const link = tab.dataset.link;
      if (link) {
        window.location.href = link;
      }
    });
  });