$('document').ready(function(){
    //alert(getUrlParameter('table'));
    var page_load_ets_key = getUrlParameter('key');
    if( page_load_ets_key != ''){
        $('#ets_key').val(page_load_ets_key);
    }
    var page_load_ets_value = getUrlParameter('value');
    if( page_load_ets_value != ''){
        $('#ets_value').val(page_load_ets_value);
    }

    if( page_load_ets_key != '' || page_load_ets_value != '' ){

        var url = window.location.href;
        var Qstring = url.split("?")[1];
        // alert(arr[1]);

        // Do the query here as AJAX call
        $.get("/api/query?"+Qstring, function( data ){
            $('#query_results').empty();
            $('#query_results').append(data);
        });
    }

});

$("#search").click(function(){
    // if either the key or value textbox has a value filled in

    var ets_key = $('#ets_key').val();
    var ets_value = $('#ets_value').val();

    if( ets_key != '' || ets_value != '' ){

        var query_portion = '';

        if(ets_key != ''){
            query_portion += '&key='+encodeURIComponent(ets_key);
        }

        if(ets_value != ''){
            query_portion += '&value='+encodeURIComponent(ets_value);
        }

        window.location.href = 'query.html?table='+getUrlParameter('table')+query_portion;
    }
});
// $("#all").click(function(){
//     window.location.href = 'all.html?table='+getUrlParameter('table');
// });
$("#page").click(function(){
    window.location.href = 'page.html?table='+getUrlParameter('table');
});
$("#download").click(function(){
    alert('not implemented yet');
});

