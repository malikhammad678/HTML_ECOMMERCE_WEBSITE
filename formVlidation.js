const header = document.querySelector('.header');
const menu = document.getElementById('menu');
const navBar = document.querySelector('.navBar');
const close = document.querySelector('.close');
window.onscroll = () => {
    if(window.scrollY > 60){
        header.classList.add('sticky');
    }
    else{
        header.classList.remove('sticky')
    }
}

if(menu){
    menu.addEventListener('click', () => {
        navBar.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', () =>{
        navBar.classList.remove('active');
    })
}

var mainImg = document.getElementById("mainImg");
var smallImg = document.getElementsByClassName('smallImg');

for (var i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function() {
        mainImg.src = this.src;
    };
}
