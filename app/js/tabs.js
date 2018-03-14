(() => {
  let navs = document.querySelector('.course-tabs-nav');
  let tabs = document.querySelectorAll('.course-tab-panel');

  navs.addEventListener('click', (e) => {
    e.preventDefault();
    let navLink = e.target;
    let tabName = navLink.dataset.tab;

    Array.from(navs.children).forEach(element => element.classList.remove('active') );
    Array.from(tabs).forEach(element => element.classList.remove('active'));

    if(tabName) {
      let tab = document.querySelector('.course-tab-panel-' + tabName);
      navLink.parentNode.classList.add('active');
      tab.classList.add('active');
    }
  });
})();