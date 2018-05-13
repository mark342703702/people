$(function(){
    var currentTableTpl = Handlebars.compile($('#currentTableTpl').html());
    var preChargeTableTpl = Handlebars.compile($('#preChargeTableTpl').html());
    var shouldChargeTableTpl = Handlebars.compile($('#shouldChargeTableTpl').html());
    var width_1 = $('#contentWidth').width() - 30;
   
    //测试数据
    var shouldChargeTableData = [
        {date : '2018-08-23', Cdeduc : '0.00', Pdeduc : '123.23', store : '213', water : '23', bouns : '123', Pwater : '23', Bwater : '23', total : '231'},
        {date : '2018-08-23', Cdeduc : '0.00', Pdeduc : '123.23', store : '213', water : '23', bouns : '123', Pwater : '23', Bwater : '23', total : '231'},
        {date : '2018-08-23', Cdeduc : '0.00', Pdeduc : '123.23', store : '213', water : '23', bouns : '123', Pwater : '23', Bwater : '23', total : '231'},
        {date : '总计', Cdeduc : '0.00', Pdeduc : '123.23', store : '213', water : '23', bouns : '123', Pwater : '23', Bwater : '23', total : '231'}
    ]

    $.getJSON("http://192.168.13.66:7778/InvokeNomalMethod?jsoncallback=?", {
            typeName : 'ChargeBussiness',
            fucName : 'getDayChargeList',
            jsonParas : ''
    },
    function(data){
        var data = JSON.parse(data).UserData;
        setTimeout(function(){

        $('#currentTable').html(currentTableTpl(data));

        $('#table1 td:first-child').width(width_1*0.25);
        $('#table1 td:nth-child(2)').width(width_1*0.25);
        $('#table1 td:nth-child(3)').width(width_1*0.25);
        $('#table1 td:nth-child(4)').width(width_1*0.125);
        $('#table1 td:nth-child(5)').width(width_1*0.125);

        $('#table1').tablesMergeCell({
            cols:[0,1]
        });

        },500)
        
    });

    $.getJSON("http://192.168.13.66:7778/InvokeNomalMethod?jsoncallback=?", {
            typeName : 'ChargeBussiness',
            fucName : 'getPreDayChargeList',
            jsonParas : ''
    },
    function(data){
        var data = JSON.parse(data).UserData;
        setTimeout(function(){
            $('#preChargeTable').html(preChargeTableTpl(data));

            $('#table2 td:first-child').width(width_1*0.2);
            $('#table2 td:nth-child(2)').width(width_1*0.2);
            $('#table2 td:nth-child(3)').width(width_1*0.2);
            $('#table2 td:nth-child(4)').width(width_1*0.2);
            $('#table2 td:nth-child(5)').width(width_1*0.2);

            $('#table2').tablesMergeCell({
                cols:[0,1]
            })

        },500)
        
    });

    setTimeout(function(){
       
        $('#shouldChargeTable').html(shouldChargeTableTpl(shouldChargeTableData));
        $('#table3 td:first-child').width(width_1*0.2);
        $('#table3 td:nth-child(2)').width(width_1*0.1);
        $('#table3 td:nth-child(3)').width(width_1*0.1);
        $('#table3 td:nth-child(4)').width(width_1*0.1);
        $('#table3 td:nth-child(5)').width(width_1*0.1);
        $('#table3 td:nth-child(6)').width(width_1*0.1);
        $('#table3 td:nth-child(7)').width(width_1*0.1);
        $('#table3 td:nth-child(8)').width(width_1*0.1);
        $('#table3 td:nth-child(9)').width(width_1*0.1);

    }, 500);


    $("#chargePaperDate1").jeDate({
        format: "YYYY-MM-DD",
        onClose : false
    });
    $("#chargePaperDate2").jeDate({
        format: "YYYY-MM-DD",
        onClose : false
    });

    $("#prestoreAnalysisDate1").jeDate({
        format: "YYYY-MM-DD",
        onClose : false
    });
    $("#prestoreAnalysisDate2").jeDate({
        format: "YYYY-MM-DD",
        onClose : false
    });


    $("#receiveAnalysisDate1").jeDate({
        format: "YYYY-MM-DD",
        onClose : false
    });
    $("#receiveAnalysisDate2").jeDate({
        format: "YYYY-MM-DD",
        onClose : false
    });

    $('#dayin').click(function(){
        $('#table1').jqprint()
    })

})