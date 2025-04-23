const images = [
    'https://picsum.photos/id/1015/1200/800',
    'https://picsum.photos/id/1016/1200/800',
    'https://picsum.photos/id/1021/1200/800'
  ];

  let index = 0;
  const body = document.body;

  function updateBackground() {
    body.style.backgroundImage = `url('${images[index]}')`;
  }

  document.getElementById('prevBtn').addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateBackground();
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateBackground();
  });

updateBackground();