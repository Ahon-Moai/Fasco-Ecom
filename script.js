const parentMenDiv = document.getElementById("men-div");
const parentWomenDiv = document.getElementById("women-div");
const tabs = document.querySelectorAll(".item-options button");
const btnOne = document.querySelector("#btn-1");
const btnTwo = document.querySelector("#btn-2");
const btnThree = document.querySelector("#btn-3");
const btnFour = document.querySelector("#btn-4");
const btnFive = document.querySelector("#btn-5");
/*  menFashionBtn.addEventListener("click", (men) => {
parentMenDiv.style.display = "flex";
parentWomenDiv.style.display = "none";
});
*/
/* womenFashionbtn.addEventListener("click", (women) => {
    parentMenDiv.style.display = "none";
    parentWomenDiv.style.display = "flex";
});
*/
btnOne.addEventListener("click", () => {
  btnOne.classList.add("active");
  btnTwo.classList.remove("active");
  btnThree.classList.remove("active");
  btnFour.classList.remove("active");
  btnFive.classList.remove("active");
});
btnTwo.addEventListener("click", () => {
  btnOne.classList.remove("active");
  btnTwo.classList.add("active");
  btnThree.classList.remove("active");
  btnFour.classList.remove("active");
  btnFive.classList.remove("active");
});
btnThree.addEventListener("click", () => {
  btnOne.classList.remove("active");
  btnTwo.classList.remove("active");
  btnThree.classList.add("active");
  btnFour.classList.remove("active");
  btnFive.classList.remove("active");
});

btnFour.addEventListener("click", () => {
  btnOne.classList.remove("active");
  btnTwo.classList.remove("active");
  btnThree.classList.remove("active");
  btnFour.classList.add("active");
  btnFive.classList.remove("active");
});

btnFive.addEventListener("click", () => {
  btnOne.classList.remove("active");
  btnTwo.classList.remove("active");
  btnThree.classList.remove("active");
  btnFour.classList.remove("active");
  btnFive.classList.add("active");
});
