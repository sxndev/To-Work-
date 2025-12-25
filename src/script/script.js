const hidden = document.querySelectorAll('.hidden');

const myObserver = new IntersectionObserver( (elements) =>{
    elements.forEach((element) => {
        if(element.isIntersecting){
            element.target.classList.add('show')
        } 
    })
} )  
        hidden.forEach( (element) => myObserver.observe(element))

