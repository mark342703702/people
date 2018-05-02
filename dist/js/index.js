$(function(){

    var userTpl = Handlebars.compile($("#userTpl").html());
    var chargeInfoTpl = Handlebars.compile($("#chargeInfoTpl").html());
    var totalInfoTpl = Handlebars.compile($("#totalInfoTpl").html());
    var preRecondTpl = Handlebars.compile($("#preRecondTpl").html());
    // $('#userData').html(userTpl());
    $.getJSON("http://192.168.13.66:7778/InvokeNomalMethod?jsoncallback=?", {
        typeName: 'ChargeBussiness',
        fucName: 'GetUserWaterFee',
        jsonParas: ''
    },
    function (data) {
        var data = JSON.parse(data).UserData;
        console.log(data)
        //用户信息数据
        var user = {
            'UserName' : data.UserName, //用户姓名
            'UserAddress' : data.UserAddress, //用户地址
            'StopTag' : data.StopTag, //停水标志
            'UserBalance' : data.UserBalance //账户余额
        }

        //费用明细数据
        var chargeInfo = data.SubComputeList;

        //费用汇总数据
        var totalInfo = {
            'OwnFee' : data.OwnFee,
            'shouldFeetotal' : 0
        }
        totalInfo.shouldFeetotal = chargeInfo.reduce(function(total,currentValue){
            return total.ShouldFee + currentValue.ShouldFee;
        })


        //用户信息
        $('#userData').html(userTpl(user));

        //费用明细
        $('#chargeInfoData').html(chargeInfoTpl(chargeInfo));
        var c_width=$('.ChargeTable').width();
        $('.ChargeTable td:first-child').width(c_width*0.1);
        $('.ChargeTable td:nth-child(2)').width(c_width*0.2);
        $('.ChargeTable td:nth-child(3)').width(c_width*0.1);
        $('.ChargeTable td:nth-child(4)').width(c_width*0.15);
        $('.ChargeTable td:nth-child(5)').width(c_width*0.2);
        $('.ChargeTable td:nth-child(6)').width(c_width*0.15);
        $('.ChargeTable td:nth-child(7)').width(c_width*0.2);

        //费用汇总
        $('#totalInfoData').html(totalInfoTpl(totalInfo));

        //预存记录
        $('#preRecondData').html(preRecondTpl());
        var _width=$('.ReTable').width();
        $('.ReTable td:first-child').width(_width*0.3);
        $('.ReTable td:nth-child(2)').width(_width*0.3);
        $('.ReTable td:nth-child(3)').width(_width*0.4);

    });



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