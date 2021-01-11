const dino = document.querySelector('.dino');
console.log(dino);

function hendelkeyup(event){
    if(event.keyCode === 32){ //Estritamente igual (===). Para descobrir o keycode http://jskeycode.info/
        console.log('ESPAÇO');
    }
}

document.addEventListener('keyup', hendelkeyup);

    