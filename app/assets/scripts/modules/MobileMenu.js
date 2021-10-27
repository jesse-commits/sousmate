class MobileMenu {

    constructor(){
        this.ourIcon = document.getElementById('menu-icon')
        this.menuTop = document.getElementById('menu-icon__top')
        this.menuMiddle = document.getElementById('menu-icon__middle')
        this.menuBottom = document.getElementById('menu-icon__bottom')
        this.ourMenu = document.getElementById('menu')
        this.events()
    }

    events(){
        this.ourIcon.addEventListener("click", () => this.toggleTheMenu() )
    }

    toggleTheMenu() {
            if(this.ourMenu.className!="show"){
                this.ourIcon.className = "header__menu-icon header__menu-icon--fixed"
                this.ourMenu.className = this.ourMenu.className + "show"
                this.menuTop.className = this.menuTop.className + " white"
                this.menuMiddle.className = this.menuMiddle.className + " white"
                this.menuBottom.className = this.menuBottom.className + " white"
            }else {
                this.ourMenu.className = ""
                this.menuTop.classList.remove("white")
                this.menuMiddle.classList.remove("white")
                this.menuBottom.classList.remove("white")
                this.ourIcon.classList.remove("header__menu-icon--fixed")
            }
        
        }
    }


export default MobileMenu