function test() {
    if(document.getElementById('hamburger').innerHTML === '☰') {
        document.getElementById('hamburger').innerHTML = '×';
    } else {
        document.getElementById('hamburger').innerHTML = '☰'
    }
    document.querySelector('.header-menu').classList.toggle('active');
}

document.getElementById('hamburger').addEventListener('click',()=>{
    test()
})

document.querySelectorAll('.header-menu-item').forEach(i =>{
    i.addEventListener('click',()=>{
        test()
    })
})