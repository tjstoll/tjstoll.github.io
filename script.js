
function openMenu() {
  var menu = document.getElementById('nav-box');
  menu.style.display = 'flex';
}

function closeMenu() {
  var menu = document.getElementById('nav-box');
  menu.style.display = 'none';
}

function jumpTo(section,a) {
  // I had to do it this way becuase wtf
  var body = document.body;
  if (section == 'top') {
    body.scrollTop = 0;
  }
  else {
    var slides = document.getElementsByClassName('content')[0];
    var jump = slides.getElementsByClassName(section)[0];
    body.scrollTop = a*jump.scrollHeight;
  }
  closeMenu();
}
