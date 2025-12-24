const threebtn = document.querySelector("#togglebtn");
const sd = document.querySelector(".slidewala");
const crs = document.querySelector("#cross");

threebtn.addEventListener("click", () => {
  sd.classList.toggle("show");
});

crs.addEventListener("click", () => {
  sd.classList.remove("show"); // cross par sirf hide karo
});
