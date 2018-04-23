$(function(){

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
    $('.ReTable th:first-child').width(_width*0.3); 
    $('.ReTable td:first-child').width(_width*0.3);
    $('.ReTable th:nth-child(2)').width(_width*0.3); 
    $('.ReTable td:nth-child(2)').width(_width*0.3);
    $('.ReTable th:nth-child(3)').width(_width*0.4); 
    $('.ReTable td:nth-child(3)').width(_width*0.4);
    
})