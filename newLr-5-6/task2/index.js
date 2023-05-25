const images = [
    "img/duck.jpg",
    "img/GentleCat.jpg",
    "img/spidermanmeme.jpg",
    "img/wazowski-mike.gif"
]
const sliderMini = document.querySelector('.slider-mini');
images.forEach(e => {
    let div = document.createElement('div');
    div.classList.add('slider-item-mini');
    let miniImg = document.createElement('img');
    miniImg.setAttribute('src',e);
    div.append(miniImg)
    sliderMini.append(div);
});
const sliderImages = document.querySelectorAll(".slider .slider-item-mini img");
const sliderBody = document.querySelector(".slider-body");

const nextBtn = document.querySelector(".slider-nav-btn.next");
const prevBtn = document.querySelector(".slider-nav-btn.prev");
function updateSliderOnBtn(src){
    let slideToRemove = document.querySelector(".slider-item");
    slideToRemove.remove();
    let sliderImage = document.createElement('img');
    sliderImage.setAttribute('src',src);
    let sliderItem = document.createElement('div');
    sliderItem.classList.add('slider-item');
    sliderItem.append(sliderImage);
    sliderBody.append(sliderItem);
}
for(let i = 0;i<sliderImages.length;i++){
    sliderImages[i].onclick = (e)=>{
        e.preventDefault();
        updateSliderOnBtn(sliderImages[i].getAttribute('src'));
    }
}

nextBtn.onclick = (e) =>{
    e.preventDefault();
    let sliderImg= document.querySelector(".slider-item img");
    let sliderImgSrc = images[(images.indexOf(sliderImg.getAttribute('src')) + 1)%images.length];
    updateSliderOnBtn(sliderImgSrc);
  
}
prevBtn.onclick = (e) =>{
    e.preventDefault();
    let slideImg= document.querySelector(".slider-item img");
    let i = images.indexOf(slideImg.getAttribute('src')) - 1;
    if(i == -1){i = images.length - 1;}
    let sliderImgSrc = images[i];
    updateSliderOnBtn(sliderImgSrc);
}