$(function(){

    $('.nav_top_li').hover(
         function(){
             $(this).find('.nav_top_item_sub').css('display','block')
         },
         function(){
             $(this).find('.nav_top_item_sub').css('display','none')
         }
    );

    $('.article').dotdotdot();
    $(".devidePage").createPage({
        pageCount:100,
        current:1,
        backFn:function(p){
            console.log(p);
        }
    });

    //获取列表数据
    $.ajax({
        type : 'GET',
        url : 'http://localhost:3000/listData',
        success : function(data){
          console.log(data)
        }
    })


 })