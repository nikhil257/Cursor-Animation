var main = document.querySelector('#main');
var cursor = document.querySelector('#cursor');
var image = document.querySelector('#image');
var heading = document.querySelector('#main .heading');

main.addEventListener('mousemove',(dets)=>{
    gsap.to(cursor,{
        x : dets.x,
        y : dets.y,
        duration :0.9,
        ease : 'back.out(3)'
    })
})

image.addEventListener('mouseenter',(dets)=>{
    cursor.style.backgroundColor = `rgba(162, 162, 162, 0.4)`
    cursor.innerHTML = `Know More`
    gsap.to(cursor,{
        scale : 3,

    })
})

image.addEventListener('mouseleave',(dets)=>{
    cursor.style.backgroundColor = `white`
    cursor.innerHTML = ``,
    gsap.to(cursor,{
        scale : 1,

    })
})

heading.addEventListener('mousemove',(dets)=>{
    cursor.style.mixBlendMode = 'difference';
    gsap.to(cursor,{
        scale : 4,
    })
    
})

heading.addEventListener('mouseleave',(dets)=>{
    cursor.style.mixBlendMode = 'normal';
    gsap.to(cursor,{
        scale : 1,
    })
    
})