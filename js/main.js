const btnMobile = document.getElementById("btn-mobile");
const nav = document.getElementById("nav");
const a = nav.querySelectorAll('a')

function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();



    nav.classList.toggle("active");

    const active = nav.classList.contains("active");

    // event.currentTarget.setAttribute("aria-expanded", active);

    if (active) {
        event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
        event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }

}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

a.forEach((e) => {
    e.addEventListener('click', toggleMenu)
})

function initScrollSuave() {
    function scrollToSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        const topo = section.offsetTop

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })

        // Forma Alternativa
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        })
    }

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')
    linksInternos.forEach(link => {
        link.addEventListener('click', scrollToSection)
    })
}

initScrollSuave()


const sections = document.querySelectorAll('.js-scroll');
console.log(sections)

function animacaoScroll() {
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.7
        function animaScroll() {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top
                const isSection = (sectionTop - windowMetade) < 0
                if (isSection) {
                    section.classList.add('ativo')
                }
            })
        }

        animaScroll()

        window.addEventListener('scroll', animaScroll)
    }


}


animacaoScroll()