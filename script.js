document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Back to Top Button
  const backToTopButton = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Light/Dark Mode Toggle
  const toggleThemeButton = document.createElement('button');
  toggleThemeButton.textContent = 'Toggle Theme';
  toggleThemeButton.style.position = 'fixed';
  toggleThemeButton.style.bottom = '2rem';
  toggleThemeButton.style.left = '2rem';
  document.body.appendChild(toggleThemeButton);
  
  toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  