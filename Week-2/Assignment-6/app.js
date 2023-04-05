

$('#banner').click(function(){
    const $bannerTexts = $('.banner-text');
    $bannerTexts.each(function(i){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            //once the active element is the last one, go back to the first one;
            let nextI = (i===$bannerTexts.length-1)? 0:i+1;
            $bannerTexts.eq(nextI).addClass("active");
            return false;
        }
    })
})

$('#expand').click(function(){
    $('.boxs').each(function(i){
        if(!$(this).hasClass("boxs-active")){
            $(this).addClass("boxs-active");
            return false;
        }
    })
})

