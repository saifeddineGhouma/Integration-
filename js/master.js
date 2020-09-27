/*check if local storage have color */
const mainColors = localStorage.getItem("color_option");
console.log(mainColors);
if (mainColors !== null) {
  document.documentElement.style.setProperty("--main--color", mainColors);

  document.querySelectorAll(".colors-list li").forEach(element => {
    element.classList.remove("active");

    if (element.dataset.color === mainColors) {
      element.classList.add("active");
    }
  });
}
// toggle class js

document.querySelector(".toggel-setting .fa-cog").onclick = function() {
  /*rotation setting */
  this.classList.toggle("fa-spin");
  /*add class open box setting*/
  document.querySelector(".setting-box").classList.toggle("open");
};

//  change color site

const colors = document.querySelectorAll(".colors-list li");
colors.forEach(element => {
  element.addEventListener("click", e => {
    var color = e.target.dataset.color;
    document.documentElement.style.setProperty("--main--color", color);
    localStorage.setItem("color_option", color);

    /**remove class active */
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
      element.classList.remove("active");
    });
    /**add class active to element */
    e.target.classList.add("active");
  });
});
//**slect element */
let landingPage = document.querySelector(".landing-page");
//***get array images  */
let imgsArray = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg"
];
setInterval(() => {
  let rendomNumber = Math.floor(Math.random() * imgsArray.length);

  landingPage.style.backgroundImage =
    'url("img/' + imgsArray[rendomNumber] + '")';
}, 10000);
