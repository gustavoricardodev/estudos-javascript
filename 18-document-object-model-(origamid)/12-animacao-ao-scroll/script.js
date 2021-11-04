function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach(function (item) {
                item.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, indexMenu) => {
            itemMenu.addEventListener('click', function () {
                activeTab(indexMenu);
            });
        });
    }
}
initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';

    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach(function (item) {
            item.addEventListener('click', activeAccordion);
        });
    }
}
initAccordion();

function initScrollSuave() {
    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        });
    }

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    linksInternos.forEach(function (item) {
        item.addEventListener('click', scrollToSection);
    });
}

initScrollSuave();

function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');

    if (sections.length) {
        const metadeAltura = window.innerHeight * 0.55;

        function animaScroll() {
            sections.forEach(function (item) {
                const sectionTop =
                    item.getBoundingClientRect().top - metadeAltura;
                if (sectionTop < 0) {
                    item.classList.add('ativo');
                }
            });
        }
    }

    animaScroll();
    window.addEventListener('scroll', animaScroll);
}
initAnimacaoScroll();
