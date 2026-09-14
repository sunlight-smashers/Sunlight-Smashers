'use strict';
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
window.matchMedia('(min-width: 801px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.querySelector('#year').textContent = new Date().getFullYear();
const form = document.querySelector('#enquiry-form');
document.querySelectorAll('[data-program]').forEach(link => link.addEventListener('click', () => {
  form.elements.program.value = link.dataset.program;
}));
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = `Badminton enquiry: ${data.get('program')}`;
  const body = `Hello Sunlight Smashers,\n\nI would like to enquire about ${data.get('program')}.\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}\n\nThank you.`;
  window.location.href = `mailto:sunlightsmashers@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const status = document.querySelector('#form-status');
  status.hidden = false;
  status.textContent = 'Your email app should open. Please send the email there to complete your enquiry. If it does not open, email sunlightsmashers@gmail.com or call 0405 441 224.';
});
