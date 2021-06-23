const mainMenu = document.getElementById('nav-main');
const navToggler = document.getElementById('nav-toggler');

// Responsive menu
function responsiveMenu() {
    mainMenu.classList.toggle('visible');
    navToggler.classList.toggle('opened');

    if(mainMenu.classList.contains('visible')) {
        navToggler.classList.remove('fixed');
    }

    else {
        navToggler.classList.add('fixed');
    }
}

window.onscroll = function fixMenu() {
    // Fix menu mobile
    if (window.scrollY > 20) {
        mainMenu.classList.add('fixed');

        if(!mainMenu.classList.contains('visible')) {
            navToggler.classList.add('fixed');
        }
    }

    else {
        mainMenu.classList.remove('fixed');
        navToggler.classList.remove('fixed');
    }
};

// Modal Ã¶ffnen und schlieÃŸen
function modal() {
    Array.from(document.getElementsByClassName('modal-opener')).forEach(val => {
        val.onclick = () => {
            document.getElementById(val.getAttribute("target")).classList.add('visible');
        }
    });

    Array.from(document.getElementsByClassName("modal")).forEach(modal => {
        modal.querySelector('.modal-closer').onclick = () => {
            modal.classList.remove('visible');
        };
    });
}

function scrollBy() {
    const container = document.getElementById('team-slide');
    const containerSize = container.offsetWidth;

    document.getElementById('scroll-right').onclick = function () {
        container.scrollBy({top: 0, left: containerSize, behavior: "smooth"});
    };

    document.getElementById('scroll-left').onclick = function () {
        container.scrollBy({top: 0, left: -containerSize, behavior: "smooth"});
    };
}


// Sidebar in Bauwert
function sidebarToggler() {
    let sidebar = document.getElementById('bauwert-sidebar');

    if(sidebar != null) {
        document.getElementById('sidebar-toggler').onclick = function () {
            sidebar.classList.toggle('visible');

            if (this.innerHTML === "Sidebar öffnen") {
                this.innerHTML = "Sidebar schließen";
            } else {
                this.innerHTML = "Sidebar öffnen";
            }
        }
    }
}


window.onload = function () {
    sidebarToggler();
    modal();
    scrollBy();
};

