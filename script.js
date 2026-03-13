// Small touch: keep the nav behavior accessible and subtle.
(function () {
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('nav a');

  const byHash = Object.create(null);
  links.forEach((link) => {
    byHash[link.getAttribute('href')] = link;
  });

  const onScroll = () => {
    let active = null;
    const y = window.scrollY + 110;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (y >= top && y <= bottom) {
        active = `#${section.id}`;
      }
    });

    links.forEach((link) => link.classList.remove('active'));
    if (active && byHash[active]) {
      byHash[active].classList.add('active');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
