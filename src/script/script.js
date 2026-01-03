const hidden = document.querySelectorAll('.hidden');

const myObserverHidden = new IntersectionObserver( (elements) =>{
    elements.forEach((element) => {
        if(element.isIntersecting){
            element.target.classList.add('show')
        } 
    })
} )  
    hidden.forEach( (element) => myObserverHidden.observe(element))