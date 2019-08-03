(() => {
  const iframe = document.querySelector('.content iframe');
  const reloadBtn = document.querySelector('.refresh-button');
  const navs = [...document.querySelectorAll('.sidebar ul li a')];

  let src = null;

  if (window.location.hash) {
    const activeNav = document.querySelector(`a[href="${window.location.hash}"]`);
    src = activeNav.getAttribute('data-src');
    iframe.setAttribute('src', src);

    activeNav.classList.add('is-active');
    reloadBtn.classList.add('is-visible');
  }

  navs.forEach((nav) => {
    nav.addEventListener('click', (e) => {
      src = nav.getAttribute('data-src');
      iframe.setAttribute('src', src);

      const activeNav = document.querySelector('.sidebar ul li a.is-active');
      if (activeNav) {
        activeNav.classList.remove('is-active');
      }
      nav.classList.add('is-active');

      reloadBtn.classList.add('is-visible');
    });
  });

  reloadBtn.addEventListener('click', () => {
    iframe.setAttribute('src', src);
  });
})();