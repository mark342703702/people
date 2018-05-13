$(function(){
    var cancelRecondTpl = Handlebars.compile($("#cancelRecondTpl").html());

    // $.getJSON("http://192.168.13.66:7778/InvokeNomalMethod?jsoncallback=?", {
    //         typeName : 'ChargeBussiness',
    //         fucName : 'getCancelChargeList',
    //         jsonParas : ''
    // },
    // function(data){
    //     var data = JSON.parse(data).UserData;
    //     $('#cancelRecondData').html(cancelRecondTpl(data));
    // });
    
    var data = [
        {
            OperatorName : '123',
            PayDate : '23',
            PayMoney : '213',
            CancelDate : '231',
            CancelManName : '213',
            StatusName : '213'
        }
    ]
    
    $('#cancelRecondData').html(cancelRecondTpl(data));


    //清空按钮
    $('#empty_link').click(function(){
        $('#preRecondData').empty();
    })
    
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


    $("#cancelRecondDate1").jeDate({
        format: "YYYY-MM-DD"
    });
    $("#cancelRecondDate2").jeDate({
        format: "YYYY-MM-DD"
    });

    $.jqPaginator('#cancelRecondPagination', {
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