const hidden = document.querySelectorAll('.hidden');
const aboutText = document.getElementById('about-text')
let index = 0

function typeEffet(){
    if(index < aboutText.textContent.length){
        aboutText.textContent += aboutText.charAt(index)
        index++
        setTimeout(typeEffet, 50)
    }
}
const MyObeserverText = new IntersectionObserver((elements) => {
    if(elements.isIntersecting){
        typeEffet()
    }
}) 
    MyObeserverText.observe(aboutText)

const myObserverHidden = new IntersectionObserver( (elements) =>{
    elements.forEach((element) => {
        if(element.isIntersecting){
            element.target.classList.add('show')
        } 
    })
} )  
    hidden.forEach( (element) => myObserverHidden.observe(element))

