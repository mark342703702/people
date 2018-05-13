$(function(){
    var prestoreRecondTpl = Handlebars.compile($("#prestoreRecondTpl").html());
    // $.getJSON("http://192.168.13.66:7778/InvokeNomalMethod?jsoncallback=?", {
    //         typeName : 'ChargeBussiness',
    //         fucName : 'getPrestoreList',
    //         jsonParas : ''
    // },
    // function(data){
    //     var data = JSON.parse(data).UserData;
    //     $('#prestoreRecondData').html(prestoreRecondTpl(data));
    // });

    //测试数据
    var data = [{
        UserSN : '123',
        UserName : '123',
        PaySiteName : '213',
        ActualMoney : '324',
        OperateTime : '232',
        OperatorName : '23123',
        OperateTypeName : '213'
    }];
    $('#prestoreRecondData').html(prestoreRecondTpl(data));

    
    $("#prestoreRecondDate1").jeDate({
        format: "YYYY-MM-DD"
    });
    $("#prestoreRecondDate2").jeDate({
        format: "YYYY-MM-DD"
    });

    $.jqPaginator('#prestoreRecondPagination', {
        totalPages: 100,
        visiblePages: 10,
        currentPage: 3,
        prev: '<li class="prev"><a href="javascript:;">上一页</a></li>',
        next: '<li class="next"><a href="javascript:;">下一页</a></li>',
        page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
        onPageChange: function (num, type) {
            console.log(num)
        }
    });
})