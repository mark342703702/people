$(function(){
    var currentTableTpl = Handlebars.compile($('#currentTableTpl').html());
    var width_1 = $('#contentWidth').width() - 30;
    
    //测试数据
    var data = [
        {
            SonCompanyName : '2323',
            UserType : '3423',
            ChargeItem : '2323',
            WaterValue : '12312',
            WaterMoney : '23434'
        }
    ]

    $('#currentTable').html(currentTableTpl(data));

    $('#table1 td:first-child').width(width_1*0.25);
    $('#table1 td:nth-child(2)').width(width_1*0.25);
    $('#table1 td:nth-child(3)').width(width_1*0.25);
    $('#table1 td:nth-child(4)').width(width_1*0.125);
    $('#table1 td:nth-child(5)').width(width_1*0.125);

    // $.getJSON("http://192.168.13.66:7778/InvokeNomalMethod?jsoncallback=?", {
    //         typeName : 'ChargeBussiness',
    //         fucName : 'getDayChargeList',
    //         jsonParas : ''
    // },
    // function(data){
    //     var data = JSON.parse(data).UserData;
    //     setTimeout(function(){

    //     $('#currentTable').html(currentTableTpl(data));

    //     $('#table1 td:first-child').width(width_1*0.25);
    //     $('#table1 td:nth-child(2)').width(width_1*0.25);
    //     $('#table1 td:nth-child(3)').width(width_1*0.25);
    //     $('#table1 td:nth-child(4)').width(width_1*0.125);
    //     $('#table1 td:nth-child(5)').width(width_1*0.125);

    //     $('#table1').tablesMergeCell({
    //         cols:[0,1]
    //     });

    //     },500)
        
    // });

    $("#chargePaperDate1").jeDate({
        format: "YYYY-MM-DD",
        onClose : false
    });
    $("#chargePaperDate2").jeDate({
        format: "YYYY-MM-DD",
        onClose : false
    });

})