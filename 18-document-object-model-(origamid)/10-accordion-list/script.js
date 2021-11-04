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
