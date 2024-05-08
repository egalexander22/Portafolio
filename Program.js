const themeToggle = document.getElementById('toggle-button');
const body = document.body;

// const savedTheme = localStorage.getItem('theme-portafolio-egalexander');
//   if (savedTheme){
//   body.classList.add(savedTheme);
//  }
themeToggle.addEventListener('click', () =>{
  body.classList.toggle('dark-theme');
  const theme = body.classList.contains('dark-theme') ? 'dark-theme' : '';
  localStorage.setItem('theme-portafolio-egalexander', theme);
});