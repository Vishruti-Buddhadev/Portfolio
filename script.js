var typed = new Typed('#element', {
  strings: ['<i></i> I am a Computer Science Graduate.'],
  typeSpeed: 50,
});

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
  l.addEventListener('click', () => { bsCollapse.toggle() })
})