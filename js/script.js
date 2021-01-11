const dino = document.querySelector('.dino');
let isJumping = false;

function hendelKeyUp(event) {
    if(event.keyCode === 32) {   //Estritamente igual (===). Para descobrir o keycode http://jskeycode.info/
        console.log('ESPAÇO');
        if (!isJumping) {
            jump();
        }
    }
}

function jump(){
    let posicao = 0;
    isJumping = true;

    let upInterval = setInterval(() => {
        if(posicao >= 150){
            clearInterval(upInterval);
                //Dino desce
                let downInterval = setInterval(() =>{
                    if (posicao <= 0) {
                        clearInterval(downInterval);
                        isJumping = false;
                    }else{
                        posicao -= 20;
                        dino.style.bottom = posicao + 'px';
                    }
            }, 20);
        }else{
            //dino sobe
            posicao = posicao + 20; //Adiciona o valor 20 a posição.
            dino.style.bottom = posicao + 'px';  
        }
         
    }, 20); //intervalo de 20milisegundos
}

document.addEventListener('keyup', hendelKeyUp);

    