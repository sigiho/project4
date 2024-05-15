const observer = new IntersectionObserver((en) =>{
    en.forEach((en)=>{
        console.log(en)
        if(en.isIntersecting){
            en.target.classList.add('show');
        }else{
            en.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el)=>observer.observe(el))

document.addEventListener('scroll', function() {
    const hero2 = document.querySelector('.hero-2');
    const hero2Position = hero2.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (hero2Position < screenPosition) {
        hero2.style.opacity = '1';
    }
});

