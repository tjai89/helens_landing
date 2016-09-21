(function() {
  [].slice.call(document.querySelectorAll('.menu')).forEach(function(menu) {
    var menuItems = menu.querySelectorAll('.menu-link'),
      setCurrent = function(ev) {
        ev.preventDefault();

        var item = ev.target.parentNode; // li
        
        // return if already current
        if( classie.has(item, 'menu-item-current') ) {
          return false;
        }
        // remove current
        classie.remove(menu.querySelector('.menu-item-current'), 'menu-item-current');
        // set current
        classie.add(item, 'menu-item-current');
      };
    
    [].slice.call(menuItems).forEach(function(el) {
      el.addEventListener('click', setCurrent);
    });
  });
})(window);