// toggle class js

document.querySelector(".toggel-setting .fa-cog").onclick = function() {
  /*rotation setting */
  this.classList.toggle("fa-spin");
  /*add class open box setting*/
  document.querySelector(".setting-box").classList.toggle("open");
};

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
