(function () {
  // Create overlay
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img src="" alt="">';
  document.body.appendChild(overlay);

  var lbImg = overlay.querySelector('img');
  var closeBtn = overlay.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    overlay.classList.add('lightbox-overlay--open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('lightbox-overlay--open');
    document.body.style.overflow = '';
  }

  // Click any image inside <main> (except those with .no-lightbox)
  document.addEventListener('click', function (e) {
    var img = e.target.closest('main img:not(.no-lightbox)');
    if (img) {
      e.preventDefault();
      openLightbox(img.src, img.alt);
    }
  });

  // Close on overlay click, close button, or Escape key
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay || e.target === closeBtn || e.target.closest('.lightbox-close')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
})();
