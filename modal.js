const saibaMaisPrimeiro = document.querySelector(".btn-saiba-mais-primeiro");
const saibaMaisSegundo = document.querySelector(".btn-saiba-mais-segundo");
const saibaMaisTerceiro = document.querySelector(".btn-saiba-mais-terceiro");
const saibaMaisQuarto = document.querySelector(".btn-saiba-mais-quarto");
const closeModalBtn = document.querySelectorAll(".btn-close-modal");
const modal = document.querySelector("#modal-primeira");
const modal2 = document.querySelector("#modal-segunda");
const modal3 = document.querySelector("#modal-terceira");
const modal4 = document.querySelector("#modal-quarta");
const fade = document.querySelector("#fade");


closeModalBtn.forEach((btn) =>
  btn.addEventListener('click', (event) => {
    modal.style.opacity="0";
    modal.style.zIndex="-10";
    modal2.style.opacity="0";
    modal2.style.zIndex="-10";
    modal3.style.opacity="0";
    modal3.style.zIndex="-10";
    modal4.style.opacity="0";
    modal4.style.zIndex="-10";
    fade.style.display="none";
  })
);

saibaMaisPrimeiro.addEventListener("click",() => {
  modal.style.opacity="1";
  modal.style.zIndex="10";
  fade.style.display="flex";
});

saibaMaisSegundo.addEventListener("click",() => {
  modal2.style.opacity="1";
  modal2.style.zIndex="10";
  fade.style.display="flex";
});

saibaMaisTerceiro.addEventListener("click",() => {
  modal3.style.opacity="1";
  modal3.style.zIndex="10";
  fade.style.display="flex";
});

saibaMaisQuarto.addEventListener("click",() => {
  modal4.style.opacity="1";
  modal4.style.zIndex="10";
  fade.style.display="flex";
});





