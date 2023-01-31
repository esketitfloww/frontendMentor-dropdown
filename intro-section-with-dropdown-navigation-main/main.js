const checkBtn = document.querySelector("#check");
const nav = document.querySelector(".nav");
const closeBtn = document.querySelector("#cross");
const logo = document.querySelector(".logo");
const container = document.querySelector("#container");
const attribute = document.querySelector(".attribution")

checkBtn.addEventListener("change", function(){
  if (checkBtn.checked){
    nav.style.right = '0';
    closeBtn.checked = false;
    logo.style.filter = "brightness(50%)";
    container.style.filter = "brightness(50%)";
    attribute.style.filter = "brightness(50%)";
  }
})

closeBtn.addEventListener("change", function(){
  if (closeBtn.checked){
    nav.style.right = "-100%";
    checkBtn.checked = false;
    logo.style.filter = "brightness(1)";
    container.style.filter = "brightness(1)";
    attribute.style.filter = "brightness(1)";
  }
})

const feature = document.querySelector("#features")
const company = document.querySelector("#company")
const arrowImg = document.querySelector("#arrow");
const arrowImg2 = document.querySelector("#arrow2");

const subMenu1 = document.querySelector("#subMenu");
const subMenu2 = document.querySelector("#subMenu2");

let subMenu1Visible = false;
let subMenu2Visible = false;

feature.addEventListener("click", function(){
  if (!subMenu1Visible) {
    subMenu1.style.display = 'flex';
    arrowImg.src = "images/icon-arrow-up.svg";
    subMenu1Visible = true;
  } else {
    subMenu1.style.display = 'none';
    arrowImg.src = "images/icon-arrow-down.svg";
    subMenu1Visible = false;
  }
});

company.addEventListener("click", function(){
  if (!subMenu2Visible) {
    subMenu2.style.display = 'flex';
    arrowImg2.src = "images/icon-arrow-up.svg";
    subMenu2Visible = true;
  } else {
    subMenu2.style.display = 'none';
    arrowImg2.src = "images/icon-arrow-down.svg";
    subMenu2Visible = false;
  }
});