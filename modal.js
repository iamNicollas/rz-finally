const saibaMaisBtn = document.querySelectorAll(".btn-saiba-mais");
const closeModalBtn = document.querySelector(".btn-close-modal");
const modal = document.querySelector("#modal");


closeModalBtn.addEventListener("click",() => {
    modal.style.opacity="0";
    modal.style.zIndex="-10";
});

saibaMaisBtn.forEach((btn) =>
  btn.addEventListener('click', (event) => {
    modal.style.opacity="1";
    modal.style.zIndex="10";
  })
);

