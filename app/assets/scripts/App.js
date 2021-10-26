import '../styles/styles.css'



if(module.hot){
    module.hot.accept() 
}

let ourIcon = document.getElementById('menu-icon')
let menuTop = document.getElementById('menu-icon__top')
let menuMiddle = document.getElementById('menu-icon__middle')
let menuBottom = document.getElementById('menu-icon__bottom')
let ourMenu = document.getElementById('menu')

ourIcon.addEventListener('click', function(){
    if(ourMenu.className!="show"){
        ourIcon.className = "header__menu-icon header__menu-icon--fixed"
        ourMenu.className = ourMenu.className + "show"
        menuTop.className = menuTop.className + " white"
        menuMiddle.className = menuMiddle.className + " white"
        menuBottom.className = menuBottom.className + " white"
    }else {
        ourMenu.className = ""
        menuTop.classList.remove("white")
        menuMiddle.classList.remove("white")
        menuBottom.classList.remove("white")
        ourIcon.classList.remove("header__menu-icon--fixed")
    }

})