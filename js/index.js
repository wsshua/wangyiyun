$(function () {
    var hashs=location.hash.split("#")[1];
    // console.log(hashs);
    var urls="./music/"+hashs;
    console.log(urls);
    var audio=$('audio');
    audio.attr('src',urls);
    audio.get(0).play();
    var playEl=$('#play');
    playEl.click(function () {
        console.log(1);
        if($(this).hasClass('active')){
            audio.get(0).pause();
            $(this).find('i').css('display','block');
            $(this).removeClass('active');
            $('.disc').removeClass('active')
        }else{
            audio.get(0).play();
            $(this).find('i').css('display','none');
            $(this).addClass('active');
            $('.disc').addClass('active');
        }

    })
    audio.on('timeupdate',function () {
        console.log();
    })
});