//  ----------show menu bar-----------
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

//  ----------Active and Remove menu bar-----------
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    //-----------Active Link--------------
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    //-----------Remove Link--------------
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//-----------Animation--------------
//-----------Scroll revel Animation--------------
const sr = ScrollReveal({
    origin: "top",
    distance: '80px',
    duration: 2000,
    reset: true
});
//-----------Scroll Home Animation--------------
sr.reveal('.home_title', {});
sr.reveal('.button', { delay: 100 });
sr.reveal('.home__img img', { delay: 80 });
sr.reveal('.home__social-icon', { interval: 80 });
sr.reveal('.fadeIn', { interval: 100 });

//-----------Scroll About Animation--------------
sr.reveal('.about__img', { delay: 80 });
sr.reveal('.about__subtitle', { delay: 100 });
sr.reveal('.about__text', { delay: 100 });

//-----------Scroll About Animation--------------
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', { interval: 100 });
sr.reveal('.skills__img', { interval: 100 });

//-----------Scroll Work Animation--------------
sr.reveal('.first__col a', { interval: 80 })

function darkMode() {
    const element = document.body;
    element.classList.toggle('darkMode');
}