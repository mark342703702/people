$(function(){
    var $el = $('.dialog');
    $el.hDialog();

    $('.nav_top_li').hover(
         function(){
             $(this).find('.nav_top_item_sub').css('display','block')
         },
         function(){
             $(this).find('.nav_top_item_sub').css('display','none')
         }
    );


    $('#check_title').click(
        function(){
            $('.check_data').toggle();
        }
    );

    $('.check_link').hDialog({
        box : '#model',
        title: '签收',
        width: 330,
        height:240,
        positions : 'center'
    });

    $('.submitBtn').click(function(e) {
        e.stopPropagation();
		var $name = $('.name');
		var $password = $('.password');

		if($name.val() == ''){
            $.tooltip('用户名不能为空！'); 
            $name.focus();
		}else if($password.val() == ''){
            $.tooltip('密码不能为空'); 
            $password.focus();
		}else{
			$.tooltip('签收成功，2秒后自动关闭',2000,true);
			setTimeout(function(){ 
				$el.hDialog('close',{box:'#model'}); 
			},2000);

		}
    });
    
    // $.ajax({
    //     type : 'GET',
    //     url : 'http://localhost:3000/listData',
    //     success : function(data){
    //        alert(data)
    //     }
    // })


 })