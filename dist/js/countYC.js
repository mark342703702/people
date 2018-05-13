$(function(){
    var preChargeTableTpl = Handlebars.compile($('#preChargeTableTpl').html());
    var width_1 = $('#contentWidth').width() - 30;
   
    //测试数据
    var data = [
        {
            SonCompanyName : '23',
            EmployeeName : '213',
            OIn : '123',
            Out : '213'
        }
    ]

    $('#preChargeTable').html(preChargeTableTpl(data));

    $('#table2 td:first-child').width(width_1*0.2);
    $('#table2 td:nth-child(2)').width(width_1*0.2);
    $('#table2 td:nth-child(3)').width(width_1*0.2);
    $('#table2 td:nth-child(4)').width(width_1*0.2);
    $('#table2 td:nth-child(5)').width(width_1*0.2);

    // $.getJSON("http://192.168.13.66:7778/InvokeNomalMethod?jsoncallback=?", {
    //         typeName : 'ChargeBussiness',
    //         fucName : 'getPreDayChargeList',
    //         jsonParas : ''
    // },
    // function(data){
    //     var data = JSON.parse(data).UserData;
    //     setTimeout(function(){
    //         $('#preChargeTable').html(preChargeTableTpl(data));

    //         $('#table2 td:first-child').width(width_1*0.2);
    //         $('#table2 td:nth-child(2)').width(width_1*0.2);
    //         $('#table2 td:nth-child(3)').width(width_1*0.2);
    //         $('#table2 td:nth-child(4)').width(width_1*0.2);
    //         $('#table2 td:nth-child(5)').width(width_1*0.2);

    //         $('#table2').tablesMergeCell({
    //             cols:[0,1]
    //         })

    //     },500)
        
    // });


    $("#prestoreAnalysisDate1").jeDate({
        format: "YYYY-MM-DD",
        onClose : false
    });
    $("#prestoreAnalysisDate2").jeDate({
        format: "YYYY-MM-DD",
        onClose : false
    });

})