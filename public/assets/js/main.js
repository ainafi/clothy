TweenMax.from(".logo",{
    opacity:0,
    delay:.5,
    x:-50,
    
})
TweenMax.staggerFrom(".navbar ul li",1,{
    opacity:0,
    delay:.5,
    x:-50,
    
},.55)

TweenMax.staggerFrom(".icon ul li",2,{
    opacity:0,
    stagger:.77,
    delay:1,
    x:-50,
    
},.66)
TweenMax.from(".paragraph",{
    opacity:0,
    stagger:.77,
    delay:1,
    y:-50,
    
})
TweenMax.from(".title",{
    opacity:0,
    stagger:.8,
    delay:2,
    y:-50,
    
})
TweenMax.from(".clothes",{
    opacity:0,
    stagger:.8,
    delay:3,
    y:-50,
    
})
TweenMax.from(".image-1",{
    opacity:0,
    stagger:.8,
    delay:4,
    x:50,
    
})
TweenMax.from(".offre",{
    opacity:0,
    stagger:.8,
    delay:5,
   
    
})
TweenMax.from(".image-2",{
    opacity:0,
    stagger:.8,
    delay:6,
    x:-50,
    
})

const menu=document.querySelector('.menu')
const navbar=document.querySelector('.navbar-nav')
console.log(navbar);
menu.addEventListener('click',()=>{
    navbar.classList.toggle('active')
})