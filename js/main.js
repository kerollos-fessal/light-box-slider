// function calcSum(...rest){
//   if(rest.length==0) return;
//   let sum = 0;
//   for(let i=0; i<rest.length-1; i++){
//     sum+= rest[i];
//   }
//   var average= sum/rest.length;
//   console.log(average);
//   console.log(sum);
//   console.log(rest.length);
//   document.write(sum,average)
// }

// calcSum(10,80);

var selectedImg = Array.from(document.querySelectorAll(".item img"));
var lightBox = document.querySelector("#lightBoxContainer");
var lightBoxItem = document.querySelector("#lightBox");
var prevBtn = document.querySelector("#prevBtn");
var nextBtn = document.querySelector("#nextBtn");
var closeBtn = document.querySelector("#closeBtn");
var currentIndex;
var label = document.querySelectorAll(".labelParagraph")


for(let i=0 ; i< selectedImg.length ; i++){
  selectedImg[i].addEventListener("click", function (e) {
  let currentImg = e.target.getAttribute("src");
    currentIndex = selectedImg.indexOf(e.target);
  lightBox.classList.replace("d-none", "d-flex");
    lightBoxItem.style.backgroundImage = `url(${currentImg})`
  })
}

closeBtn.addEventListener("click", closeSlide);
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);


function closeSlide() {
  lightBox.classList.replace("d-flex", "d-none");
}

function nextSlide() {
  currentIndex++;
  if(currentIndex >= selectedImg.length) {
  currentIndex =0;
  }
  lightBoxItem.style.backgroundImage = `url(${selectedImg[currentIndex].getAttribute("src")})`;
}


function prevSlide() {
  currentIndex--;
  if(currentIndex < 0) {
  currentIndex =selectedImg.length-1;
  }
  lightBoxItem.style.backgroundImage = `url(${selectedImg[currentIndex].getAttribute("src")})`;
}


for(let i=0 ; i< selectedImg.length ; i++){
  label[i].addEventListener("click", function (e) {
    let currentImgIndex = i;
    let selectedOneImg  = selectedImg[currentImgIndex].getAttribute("src");
    currentIndex = currentImgIndex;
    lightBox.classList.replace("d-none", "d-flex");
    lightBoxItem.style.backgroundImage = `url(${selectedOneImg})`
  })
  }

document.addEventListener("keyup", function(e) {
if(lightBox.classList.contains("d-flex")){
  switch (e.key){
    case "ArrowLeft":
    prevSlide();
    break;
    case "ArrowRight":
    nextSlide();
    break;
    case "Escape":
    closeSlide();
    break;
  }
}
})

document.addEventListener("click", function (e) {
  if(e.target == lightBox){
    closeSlide();
  }
})