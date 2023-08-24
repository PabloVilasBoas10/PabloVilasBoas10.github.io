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

function animacaoScroll() {
    if (sections.length) {
        const windowMetade = window.innerHeight * 1
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

function typeWrite(elemento) {
    const textoArray = elemento.innerText.split('');
    elemento.innerText = '';
    textoArray.forEach(function (letra, i) {

        setTimeout(function () {
            elemento.innerText += letra;
        }, 75 * i)

    });

}
const titulo = document.querySelector('.informacoes-inicio p');
typeWrite(titulo);


const habilidades = document.querySelectorAll('.habilidades-tecnologias div')
habilidades.forEach(item => {
    const nomeClass = item.className
    item.addEventListener('mouseover', () => {
        item.setAttribute('title', nomeClass.toUpperCase())
    })
})


