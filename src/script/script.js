const hidden = document.querySelectorAll('.hidden');

const myObserverHidden = new IntersectionObserver( (elements) =>{
    elements.forEach((element) => {
        if(element.isIntersecting){
            element.target.classList.add('show')
        } 
    })
} )  
    hidden.forEach( (element) => myObserverHidden.observe(element))

const aboutText = document.getElementById('about-text')
const aboutImage = document.getElementById('about-image')

const myObserverAbout = new IntersectionObserver( (elements) => {
    elements.forEach((element) => {
        if(element.isIntersecting){
            element.target.classList.add('show-about')
        }
    })
})