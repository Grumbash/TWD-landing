var radio = document.getElementsByClassName("radioNav__item");
var nav = document.getElementById("navControl");
var slider = document.getElementById("sliderJs");
var bannerControl = document.getElementById("bannerControl");
var bannerVideo = document.getElementById("bannerVideo");
console.log(bannerVideo);

var count = 0;
const img = ['./images/1.png', './images/2.png', "./images/3.png", "./images/4.png"]
slider.addEventListener("click", function (e) {
    if(e.target.id =='infoBth'){
        window.location.replace("https://grumbash.github.io/");
    };

    if (e.target.id == "controlLeft" || e.target.id == "arrowLeft") {

        count -= 1;
        console.log(count)
        if (count < 0) {
            count = img.length - 1;
        }
        console.log(count)
        for (var index = 0; index < radio.length; index++) {
            if (radio[index].classList.contains('activ')) {
                radio[index].classList.remove("activ");
            }

        }
        radio[count].classList.add("activ");
        slider.style.background = `url(${img[count]})`;
        slider.style.backgroundRepeat = "no-repeat";
        slider.style.backgroundSize = "100% 100%";
    } else if (e.target.id == "controlRight" || e.target.id == "arrowRight") {
        count += 1;



        radio[count - 1].classList.remove("activ")
        if (count == 4) {
            count = 0;
        }
        console.log(count)
        slider.style.background = `url(${img[count]})`;
        slider.style.backgroundRepeat = "no-repeat";
        slider.style.backgroundSize = "100% 100%";
        radio[count].classList.add("activ")
    };


})

bannerControl.addEventListener('click',function(e){
    if(e.target.id === "bannerControl"){

        bannerVideo.play();
        bannerControl.style.display="none";
        bannerVideo.style.opacity="1";
    }

});
bannerVideo.addEventListener('ended',function(e){
    bannerVideo.style.opacity="0.5";
    bannerControl.style.display="flex";

},false)
