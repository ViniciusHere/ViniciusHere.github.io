const boxButton = document.querySelector('.header__button__box')
const button = document.querySelector('.button__box')
const icon = document.querySelector('.fa-moon')
const html = document.documentElement
let userImg = document.getElementById('userImg')
let contactImg = document.getElementById('contactImg')
let skillImg = document.getElementById('skillImg')
let projectImg = document.getElementById('projectImg')
let query = window.matchMedia("(max-width: 600px)")

boxButton.addEventListener('click', function(){
    html.classList.toggle('light')
    button.classList.toggle('header__button__box--toggle')
    if(icon.classList.contains("fa-moon")){
        icon.classList.replace("fa-moon", "fa-sun")
    }
    else {
        icon.classList.replace("fa-sun", "fa-moon")
    }
    
})


function render(e) {

    if(e.matches){
        userImg.innerHTML = '<i class="fa-solid fa-user"></i>'
        projectImg.innerHTML = '<i class="fa-solid fa-folder"></i>'
        skillImg.innerHTML = '<i class="fa-solid fa-screwdriver-wrench"></i>'
        contactImg.innerHTML = '<i class="fa-solid fa-address-book"></i>'
    }else{
        userImg.innerHTML = 'sobre mim'
        projectImg.innerHTML = 'projetos'
        skillImg.innerHTML = 'minhas skills'
        contactImg.innerHTML = 'contato'
    }
}

render(query)
query.addEventListener('change', render)


