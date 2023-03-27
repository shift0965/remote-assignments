const boxs = document.querySelectorAll(".box");
const popup = document.querySelector(".popup");
const popupTitle = popup.querySelector('.upper');
const popupImg = popup.querySelector('.img-container');
const closePopup = popup.querySelector(".closebtn");
const hint = document.querySelector('.hint');

console.log(closePopup)

closePopup.addEventListener("click", function(){
    popup.classList.remove('active');
})

boxs.forEach(box => {
    box.addEventListener('click', function(){
        if(!popup.classList.contains('active')){
            if(this.id === '3'){
                popupTitle.innerHTML='<h1>答對了!</h1>'
                popupImg.innerHTML=`<img src="./imgs/correct.png" alt="ji happy">`
                popup.classList.add('active')
            }
            else{
                popupTitle.innerHTML='<h1>認錯本吉?</h1>'
                popupImg.innerHTML=`<img src="./imgs/wrong.png" alt="ji angry">`
                popup.classList.add('active')
            }
        }
    })
})

hint.addEventListener('click', function(){
    if(!popup.classList.contains('active')){
        popupTitle.innerHTML='<h1>這需要提示??</h1>'
        popupImg.innerHTML=`<img src="./imgs/hint.png" alt="ji happy">`
        popup.classList.add('active')

    }
})




