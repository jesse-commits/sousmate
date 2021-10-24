import '../styles/styles.css'



if(module.hot){
    module.hot.accept() 
}

let ourIcon = document.getElementById('menu-icon')
let ourMenu = document.getElementById('menu')

ourIcon.addEventListener('click', function(){
    if(ourMenu.className!="show"){
        ourMenu.className = ourMenu.className + "show"
    }else {
        ourMenu.className = ""
    }
})

