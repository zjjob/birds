$(function(){
    var arr=['dist/img/banner01_bg.jpg',"dist/img/banner02_bg.jpg",'dist/img/banner01_bg.jpg'];
    var index=0;
    //  var a=setInterval(function(){
    //     if(index>arr.length-1){
    //         index=0;
    //     }
    //     change();
    //     index++;
    // },2000)
    $(".banner .btnGroup .btnGroupCount .left").click(function(){
        // clearInterval(a);
       index--;
       if(index<0){
           index=arr.length-1;
       }
       change();
    })
     $(".banner .btnGroup .btnGroupCount .right").click(function(){
       index++;
       if(index>arr.length-1){
           index=0;
       }
       change();
    })
    $('.banner .btnGroup .btnGroupCount .center div span').click(function(){
        index=$(this).index();
        change();
    })
    function change(){
        $(".banner>img").attr("src",arr[index]);
        $(".banner .btnGroup .btnGroupCount li div span").removeClass("active");
        $(".banner .btnGroup .btnGroupCount li div span").eq(index).attr({class:'active'});
        switch(index){
            case 0:
             hideimg();
                $(".banner .img1").css({'left':'0px'});
                $(".banner .img2").css({'right':'0px'});
             img1play();
             break;
            case 1:
                hideimg();
                $(".banner .img4").css({'left':'0px'},1000);
                $(".banner .img6").css({'right':'0px'},1000);
                img2play();
                break;
            case 2:
                hideimg();
                 $(".banner .img7").css({'left':'0px'});
                 $(".banner .img8").css({'right':'0px'});
                img3play();
                break;
        }
        
    }
    //设置第一幅图的样式
    function img1play(){
        hideimg();
        $(".banner .img1").stop();
        $(".banner .img2").stop();
        $(".banner .img1").show();
        $(".banner .img2").show();
        $(".banner .img3").show();
        $(".banner .img1").animate({'left':'600px'},1000);
        $(".banner .img2").animate({'right':'400px'},1000);
    }
    //设置第二幅图的样式
    function img2play(){
        hideimg();
        $(".banner .img4").stop();
        $(".banner .img6").stop();
        $(".banner .img4").show();
        $(".banner .img5").show();
        $(".banner .img6").show();
        $(".banner .img4").animate({'left':'300px'},1000);
        $(".banner .img6").animate({'right':'850px'},1000);
    }
    //设置第三幅图的样式
    function img3play(){
        $(".banner .img7").stop();
        $(".banner .img8").stop();
        $(".banner .img7").show();
        $(".banner .img8").show();
        $(".banner .img9").show();
        $(".banner .img7").animate({'left':'600px'},1000);
        $(".banner .img8").animate({'right':'400px'},1000);
    }
    //清除所有的样式
    function hideimg(){
        $(".banner .img1").hide();
        $(".banner .img2").hide();
        $(".banner .img3").hide();
        $(".banner .img4").hide();
        $(".banner .img5").hide();
        $(".banner .img6").hide();
        $(".banner .img7").hide();
        $(".banner .img8").hide();
        $(".banner .img9").hide();
    }
    img1play();
});
