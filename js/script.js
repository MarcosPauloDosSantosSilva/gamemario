const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const flor = document.querySelector('.flor');

const jump=()=>{
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump'); 
    },500);

}

const loop = setInterval(()=>{

    const florPosition = flor.offsetLeft;
    const pipePosition = pipe.offsetLeft;
    
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    
    

    if ((florPosition <= 120 && florPosition > 0 && marioPosition < 80 )||(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 )){

        pipe.style.animation ='none';
        pipe.style.left = `${pipePosition}px`;

        flor.style.animation ='none';
        flor.style.left = `${florPosition}px`;

        mario.style.animation ='none';
        mario.style.bottom = `${marioPosition}px`;

        

        mario.src = "./image/marioover.png";
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }

},10);

document.addEventListener('keydown', jump);