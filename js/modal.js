document.getElementById('web-campaign-pc-button').addEventListener('click',()=>{
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
})

document.getElementById('modal-close').addEventListener('click',()=>{
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('body').style.overflow = '';
})

document.getElementById('web-campaign-sp-button').addEventListener('click',()=>{
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
})

document.getElementById('modal-close').addEventListener('click',()=>{
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('body').style.overflow = '';
})