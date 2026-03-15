    // Scroll spy
    const navLinks = document.querySelectorAll('.nav-links a');
    const spySections = document.querySelectorAll('#home, #experiencia, #habilidades, #formacao, #contato');
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(a => a.classList.remove('active'));
          const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
          if (a) a.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    spySections.forEach(s => spy.observe(s));

    // Fade-in
    const fades = document.querySelectorAll('.fade-in');
    const fadeObs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); fadeObs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    fades.forEach(el => fadeObs.observe(el));
