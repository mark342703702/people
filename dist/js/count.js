$(function(){
    var currentTableTpl = Handlebars.compile($('#currentTableTpl').html());
    var preChargeTableTpl = Handlebars.compile($('#preChargeTableTpl').html());
    var shouldChargeTableTpl = Handlebars.compile($('#shouldChargeTableTpl').html());

    //测试数据
    var currentTableData = [
        { location : '城区营业所', cate : '居民用水', project : '基本水费', water : '45', money : '657' },
        { location : '城区营业所', cate : '居民用水', project : '一阶基本水费', water : '23', money : '567' },
        { location : '城区营业所', cate : '居民用水', project : '污水处理费', water : '54', money : '175' },
        { location : '城区营业所', cate : '居民用水', project : '小计', water : '67', money : '753' },
        { location : '城区营业所', cate : '非居民用水', project : '基本水费', water : '45', money : '657' },
        { location : '城区营业所', cate : '非居民用水', project : '一阶基本水费', water : '23', money : '567' },
        { location : '城区营业所', cate : '非居民用水', project : '污水处理费', water : '54', money : '175' },
        { location : '城区营业所', cate : '非居民用水', project : '小计', water : '67', money : '753' },
        { location : '城区营业所', cate : '特行用水', project : '基本水费', water : '45', money : '657' },
        { location : '城区营业所', cate : '特行用水', project : '一阶基本水费', water : '23', money : '567' },
        { location : '城区营业所', cate : '特行用水', project : '污水处理费', water : '54', money : '175' },
        { location : '城区营业所', cate : '特行用水', project : '小计', water : '67', money : '753' },
        { location : '城区营业所', cate : '其他费用', project : '违约金', water : '23', money : '567' },
        { location : '城区营业所', cate : '其他费用', project : '预存水费', water : '54', money : '175' },
        { location : '城区营业所', cate : '其他费用', project : '小计', water : '67', money : '753' },
        { location : '城区营业所', cate : '城区营业所合计', project : '', water : '67', money : '753' },
        { location : '合计', cate : '', project : '', water : '67', money : '753' }
    ];

    //测试数据
    var preChargeTableData = [
        {com : '思源供水有限公司', location : '城区营业所', man : '校容', money : '323', charge : '23', back : '23'},
        {com : '思源供水有限公司', location : '城区营业所', man : '小明', money : '323', charge : '23', back : '23'},
        {com : '思源供水有限公司', location : '城区营业所', man : '预存自动扣费', money : '323', charge : '23', back : '23'},
        {com : '思源供水有限公司', location : '分所合计', man : '', money : '323', charge : '23', back : '23'},
        {com : '合计', location : '', man : '', money : '323', charge : '23', back : '23'}
    ];

    //测试数据
    var shouldChargeTableData = [
        {date : '2018-08-23', Cdeduc : '0.00', Pdeduc : '123.23', store : '213', water : '23', bouns : '123', Pwater : '23', Bwater : '23', total : '231'},
        {date : '2018-08-23', Cdeduc : '0.00', Pdeduc : '123.23', store : '213', water : '23', bouns : '123', Pwater : '23', Bwater : '23', total : '231'},
        {date : '2018-08-23', Cdeduc : '0.00', Pdeduc : '123.23', store : '213', water : '23', bouns : '123', Pwater : '23', Bwater : '23', total : '231'},
        {date : '总计', Cdeduc : '0.00', Pdeduc : '123.23', store : '213', water : '23', bouns : '123', Pwater : '23', Bwater : '23', total : '231'}
    ]
    $('#currentTable').html(currentTableTpl(currentTableData));
    $('#preChargeTable').html(preChargeTableTpl(preChargeTableData));
    $('#shouldChargeTable').html(shouldChargeTableTpl(shouldChargeTableData))

    $("#chargePaperDate1").jeDate({
        format: "YYYY-MM-DD",
        onClose : false
    });
    $("#chargePaperDate2").jeDate({
        format: "YYYY-MM-DD",
        onClose : false
    });

    $('#table1').tablesMergeCell({
        cols:[0,1]
    })

    var width_1 = $('#table1').width();
    $('#table1 td:first-child').width(width_1*0.25);
    $('#table1 td:nth-child(2)').width(width_1*0.25);
    $('#table1 td:nth-child(3)').width(width_1*0.25);
    $('#table1 td:nth-child(4)').width(width_1*0.125);
    $('#table1 td:nth-child(5)').width(width_1*0.125);


    $("#prestoreAnalysisDate1").jeDate({
        format: "YYYY-MM-DD",
        onClose : false
    });
    $("#prestoreAnalysisDate2").jeDate({
        format: "YYYY-MM-DD",
        onClose : false
    });

    $('#table2').tablesMergeCell({
        cols:[0,1]
    })

    $('#table2 td:first-child').width(width_1*0.2);
    $('#table2 td:nth-child(2)').width(width_1*0.2);
    $('#table2 td:nth-child(3)').width(width_1*0.15);
    $('#table2 td:nth-child(4)').width(width_1*0.15);
    $('#table2 td:nth-child(5)').width(width_1*0.15);
    $('#table2 td:nth-child(6)').width(width_1*0.15);
    

    $("#receiveAnalysisDate1").jeDate({
        format: "YYYY-MM-DD",
        onClose : false
    });
    $("#receiveAnalysisDate2").jeDate({
        format: "YYYY-MM-DD",
        onClose : false
    });

    $('#table3 td:first-child').width(width_1*0.2);
    $('#table3 td:nth-child(2)').width(width_1*0.1);
    $('#table3 td:nth-child(3)').width(width_1*0.1);
    $('#table3 td:nth-child(4)').width(width_1*0.1);
    $('#table3 td:nth-child(5)').width(width_1*0.1);
    $('#table3 td:nth-child(6)').width(width_1*0.1);
    $('#table3 td:nth-child(7)').width(width_1*0.1);
    $('#table3 td:nth-child(8)').width(width_1*0.1);
    $('#table3 td:nth-child(9)').width(width_1*0.1);

    $('#dayin').click(function(){
        $('#table1').jqprint()
    })

})