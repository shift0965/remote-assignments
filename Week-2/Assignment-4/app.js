const banner = document.querySelector("#banner");
const bannerTexts = banner.querySelectorAll('.banner-text');
const expand = document.querySelector('#expand');
const boxs = document.querySelectorAll(".boxs");


banner.addEventListener('click', function(){
    for(let i=0; i<bannerTexts.length; i++){
        if(bannerTexts[i].classList.contains("active")){
            bannerTexts[i].classList.remove("active");
            //once the active element is the last one, go back to the first one;
            let nextI = (i===bannerTexts.length-1)? 0:i+1;
            bannerTexts[nextI].classList.add("active");
            break;
        }
    }
})

expand.addEventListener("click", function(){
    for(let i=0; i<boxs.length; i++){
        if(!boxs[i].classList.contains("boxs-active")){
            boxs[i].classList.add("boxs-active");
            break;
        }
    }
})

