$(function(){

    var userTpl = Handlebars.compile($("#userTpl").html());
    $('#userData').html(userTpl());

    var reStoreCtx = $("#restoreChart");
    var waterCtx = $("#waterRentChart");
    var reStoreChart = new Chart(reStoreCtx, {
        type : 'pie',
        data : {
            datasets: [{
                data: [16, 23, 10],
                backgroundColor : [
                    'rgba(105,105,105,0.5)',
                    'rgba(255,140,0,0.5)',
                    'rgba(135,206,235,0.5)'
                ],
                borderColor:[
                    'rgba(105,105,105, 1)',
                    'rgba(255,140,0, 1)',
                    'rgba(135,206,235, 1)'
                ],
                borderWidth : 1
            }],        
            labels: [
                '污染费',
                '垃圾处理费',
                '水费'
            ]
        }
    });
    var waterChart = new Chart(waterCtx, {
        type : 'pie',
        data : {
            datasets: [{
                data: [10, 20, 30],
                backgroundColor : [
                    'rgba(178,34,34,0.5)',
                    'rgba(30,144,255,0.5)',
                    'rgba(60,179,113,0.5)',
                ],
                borderColor:[
                    'rgba(178,34,34,1)',
                    'rgba(30,144,255,1)',
                    'rgba(60,179,113,1)'
                ],
                borderWidth : 1
            }],        
            labels: [
                '现金预存',
                '微信支付',
                '银行转账'
            ]
        }

    });
    var _width=$('.ReTable').width();
    $('.ReTable td:first-child').width(_width*0.3);
    $('.ReTable td:nth-child(2)').width(_width*0.3);
    $('.ReTable td:nth-child(3)').width(_width*0.4);
    
    var c_width=$('.ChargeTable').width();
    $('.ChargeTable td:first-child').width(c_width*0.1);
    $('.ChargeTable td:nth-child(2)').width(c_width*0.2);
    $('.ChargeTable td:nth-child(3)').width(c_width*0.1);
    $('.ChargeTable td:nth-child(4)').width(c_width*0.15);
    $('.ChargeTable td:nth-child(5)').width(c_width*0.2);
    $('.ChargeTable td:nth-child(6)').width(c_width*0.15);
    $('.ChargeTable td:nth-child(7)').width(c_width*0.2);




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