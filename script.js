const bar = document.getElementById('bar')
const active = document.querySelector('.active')

bar.addEventListener('click',()=>{
    active.classList.toggle('active')
    bar.style.marginLeft ='100px'
    bar.style.color ='tomato'
})