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

// Coaching carousel: manual controls, automatic scrolling and touch gestures.
(() => {
  const carousel = document.querySelector('.coaching-slideshow');
  if (!carousel) return;
  const track = carousel.querySelector('.coaching-slides');
  const slides = [...track.querySelectorAll('.coaching-slide')];
  const counter = carousel.querySelector('.slide-count');
  const pause = carousel.querySelector('.slide-pause');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let playing = !motion.matches;
  let timer;
  function show(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    counter.textContent = `${current + 1} / ${slides.length}`;
    slides.forEach((slide, i) => slide.setAttribute('aria-hidden', String(i !== current)));
  }
  function schedule() {
    clearInterval(timer);
    pause.textContent = playing ? 'Pause slideshow' : 'Play slideshow';
    if (playing && !document.hidden && !carousel.matches(':hover') && !carousel.contains(document.activeElement)) {
      timer = setInterval(() => show(current + 1), 5000);
    }
  }
  carousel.querySelector('.slide-previous').addEventListener('click', () => {show(current - 1);schedule();});
  carousel.querySelector('.slide-next').addEventListener('click', () => {show(current + 1);schedule();});
  pause.addEventListener('click', () => {playing = !playing;schedule();});
  carousel.addEventListener('mouseenter', () => clearInterval(timer));
  carousel.addEventListener('mouseleave', schedule);
  carousel.addEventListener('focusin', () => clearInterval(timer));
  carousel.addEventListener('focusout', () => setTimeout(schedule, 0));
  document.addEventListener('visibilitychange', schedule);
  motion.addEventListener('change', () => {if (motion.matches) playing = false;schedule();});
  let startX = 0;
  carousel.addEventListener('touchstart', event => {startX = event.touches[0].clientX;clearInterval(timer);}, {passive:true});
  carousel.addEventListener('touchend', event => {
    const distance = event.changedTouches[0].clientX - startX;
    if (Math.abs(distance) > 50) show(current + (distance < 0 ? 1 : -1));
    schedule();
  }, {passive:true});
  show(0);schedule();
})();
