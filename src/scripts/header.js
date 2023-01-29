const header = document.getElementById('header')
const headerLogo = document.getElementById('header-logo')

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight / 2) {
    header.classList.remove('bg-black/50', 'text-white', 'backdrop-blur-md')
    header.classList.add('bg-white', 'text-black', 'backdrop-blur-0')
    headerLogo.setAttribute('src', '/images/experientialist-logotype.png')
  } else {
    header.classList.add('bg-black/50', 'text-white', 'backdrop-blur-md')
    header.classList.remove('bg-white', 'text-black', 'backdrop-blur-0')
    headerLogo.setAttribute('src', '/images/experientialist-logotype-white.png')
  }
})
