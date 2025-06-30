(function () {
  

  // Invert .phabricator-nav-local.phabricator-side-menu
  const sideMenu = document.querySelector('.phabricator-nav-local.phabricator-side-menu');
  if (sideMenu) sideMenu.style.filter = 'invert(100%)';

  // Invert .phabricator-nav-content.plb
  const content = document.querySelector('.phabricator-nav-content.plb');
  if (content) content.style.filter = 'invert(100%)';



  // Invert <a> tags inside specific nested divs
  setTimeout(() => {
    document.querySelectorAll('a.visual-only.phui-icon-view.phui-feed-story-actor.phui-feed-story-actor-image[href^="/p/"]').forEach(a => {
      a.style.filter = 'invert(100%)';
    });
  }, 5000); // delay to let content load


})();
