$(function(){
    var chargeRecondTpl = Handlebars.compile($("#chargeRecondTpl").html());

    // $.getJSON("http://192.168.13.66:7778/InvokeNomalMethod?jsoncallback=?", {
    //         typeName : 'ChargeBussiness',
    //         fucName : 'getChargeList',
    //         jsonParas : ''
    // },
    // function(data){
    //     var data = JSON.parse(data).UserData;
    //     $('#chargeRecondData').html(chargeRecondTpl(data));
    // });

    //测试数据
    var data = [
        {
            OperatorName : '123',
            PayMoney : '213',
            PayDate : '23',
            StatusName : '123'
        }
    ]

    $('#chargeRecondData').html(chargeRecondTpl(data));

    $("#chargeRecondDate1").jeDate({
        format: "YYYY-MM-DD"
    });
    $("#chargeRecondDate2").jeDate({
        format: "YYYY-MM-DD"
    });

    $.jqPaginator('#chargeRecondPagination', {
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