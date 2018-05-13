$(function(){
    var shouldChargeTableTpl = Handlebars.compile($('#shouldChargeTableTpl').html());
    var width_1 = $('#contentWidth').width() - 30;
   
    //测试数据
    var shouldChargeTableData = [
        {date : '2018-08-23', Cdeduc : '0.00', Pdeduc : '123.23', store : '213', water : '23', bouns : '123', Pwater : '23', Bwater : '23', total : '231'},
        {date : '2018-08-23', Cdeduc : '0.00', Pdeduc : '123.23', store : '213', water : '23', bouns : '123', Pwater : '23', Bwater : '23', total : '231'},
        {date : '2018-08-23', Cdeduc : '0.00', Pdeduc : '123.23', store : '213', water : '23', bouns : '123', Pwater : '23', Bwater : '23', total : '231'},
        {date : '总计', Cdeduc : '0.00', Pdeduc : '123.23', store : '213', water : '23', bouns : '123', Pwater : '23', Bwater : '23', total : '231'}
    ]

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

    $("#receiveAnalysisDate1").jeDate({
        format: "YYYY-MM-DD",
        onClose : false
    });
    $("#receiveAnalysisDate2").jeDate({
        format: "YYYY-MM-DD",
        onClose : false
    });

})