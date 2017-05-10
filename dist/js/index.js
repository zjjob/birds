$(function(){
    var arr=['dist/img/banner01_bg.jpg',"dist/img/banner02_bg.jpg",'dist/img/banner01_bg.jpg'];
    var index=0;
    //  setInterval(function(){
    //     if(index>arr.length-1){
    //         index=0;
    //     }
    //     change();
    //     index++;
    // },1000)
    $(".banner .btnGroup .btnGroupCount .left").click(function(){
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
        
    }
});
