class MobileMenu {

    constructor(){
        this.ourIcon = document.querySelector('.header__menu-icon')
        this.menuTop = document.querySelector('.header__menu-icon__top')
        this.menuMiddle = document.querySelector('.header__menu-icon__middle')
        this.menuBottom = document.querySelector('.header__menu-icon__bottom')
        this.ourMenu = document.querySelector('.menu')
        this.ourHeader = document.querySelector(".header")
        this.headerLogo = document.querySelector(".header__logo")
        this.events()
    }

    events(){
        this.ourIcon.addEventListener("click", () => this.toggleTheMenu() )
    }

    toggleTheMenu() {
            
                this.ourIcon.classList.toggle("header__menu-icon--fixed")
                this.ourMenu.classList.toggle("show")
                this.menuTop.classList.toggle("white")
                this.menuMiddle.classList.toggle("white")
                this.menuBottom.classList.toggle("white")
                this.ourHeader.classList.toggle("header--black")
                this.headerLogo.classList.toggle("header__logo--white")
        }
    }


export default MobileMenu