$(function(){

    $("#chargePaperDate1").jeDate({
        format: "YYYY-MM-DD"
    });
    $("#chargePaperDate2").jeDate({
        format: "YYYY-MM-DD"
    });


    $("#prestoreAnalysisDate1").jeDate({
        format: "YYYY-MM-DD"
    });
    $("#prestoreAnalysisDate2").jeDate({
        format: "YYYY-MM-DD"
    });


    $("#receiveAnalysisDate1").jeDate({
        format: "YYYY-MM-DD"
    });
    $("#receiveAnalysisDate2").jeDate({
        format: "YYYY-MM-DD"
    });

    $('#table1').tablesMergeCell({
        cols:[0,1]
    })

    $('#dayin').click(function(){
        $('#table1').jqprint()
    })

})