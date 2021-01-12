const dino = document.querySelector(".dino");
const bg = document.querySelector('.bg');
let isJumping = false;

function hendelKeyUp(event) {
  if (event.keyCode === 32) {
    //Estritamente igual (===). Para descobrir o keycode http://jskeycode.info/
    console.log("ESPAÇO");
    if (!isJumping) {
      jump();
    }
  }
}

function jump() {
  let posicao = 0;
  isJumping = true;

  let upInterval = setInterval(() => {
    if (posicao >= 150) {
      clearInterval(upInterval);
      //Dino desce
      let downInterval = setInterval(() => {
        if (posicao <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          posicao -= 20;
          dino.style.bottom = posicao + "px";
        }
      }, 20);
    } else {
      //dino sobe
      posicao = posicao + 20; //Adiciona o valor 20 a posição.
      dino.style.bottom = posicao + "px";
    }
  }, 20); //intervalo de 20milisegundos
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusposicao = 1000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    bg.appendChild(cactus);
}
createCactus();
document.addEventListener("keyup", hendelKeyUp);
