

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))



window.addEventListener("scroll", function(){
    let header = document.querySelector('#menu')
    menu-h.classList.toggle('rolagem', window.scrollY >0)
})