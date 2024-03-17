function initializeCaptions() {
  document.getElementById('gallery').querySelectorAll('a').forEach(galleryImage => {
    const captionText = galleryImage.querySelector('img').getAttribute('alt');
    galleryImage.querySelector('span').innerText = captionText;
  });
}
