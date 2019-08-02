(() => {
  const iframe = document.querySelector('.content iframe');
  const reloadBtn = document.querySelector('.refresh-button');
  const navs = [...document.querySelectorAll('.sidebar ul li a')];

  let src = null;

  navs.forEach((nav) => {
    nav.addEventListener('click', (e) => {
      e.preventDefault();
      src = nav.getAttribute('href');
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