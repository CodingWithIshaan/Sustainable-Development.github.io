Hamburger = document.querySelector('.Hamburger')
Navbar = document.querySelector('.Navbar')
Navbarlist = document.querySelector('.Navbar-list')

Hamburger.addEventListener('click', ()=>{
    Navbarlist.classList.toggle('v-class-resp')
    Navbar.classList.toggle('H-Nav-resp')
})