document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggle = document.querySelector('.mobile-toggle');
  if (toggle) toggle.addEventListener('click', () => body.classList.toggle('nav-open'));

  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const button = form.querySelector('button[type="submit"]');
      const original = button ? button.textContent : '';
      if (button) button.textContent = 'REQUEST SENT ✓';
      alert('Thank you! This static GitHub form is ready for integration. Connect it to Formspree, Shopify contact form, or email automation for live submissions.');
      setTimeout(()=>{ if(button) button.textContent = original; }, 1800);
      form.reset();
    });
  });

  const back = document.querySelector('.backtop');
  if(back){ back.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'})); }
});
