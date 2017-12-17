function main() {
    var $table, $tr, $td;
    $table = $("<table>");
    var count = 1;

    $('#start').click(function() {
        $table.remove();
        count = 1;
        $("h1").html("Tic-Tac-Toe!").css({'color': 'black', 'font-style': 'normal'});
        $("#res").html("");
        refresh();
    });

    function refresh(){
        $table = $("<table>");
        for (var i = 0; i < 3; i++) {
            $tr = $('<tr>');
                $table.append($tr);
                for (var j = 0; j < 3; j++) {
                    $td = $('<td>');
                    $td.attr("id", "cell_" +i +j);
                    /*console.log($td.attr("id"));*/
                    $tr.append($td);
                    
                    $td.on('click', function() {
                        if (count % 2 == 0) {
                            $(this).html('O').off('click');
                        } else {
                            $(this).html('X').off('click');
                        }
                        
                        if(count >= 5 && count <= 9) {
                            if(three("X")) {
                                $("#res").html("Player X wins!");
                                $("h1").html("Press start to play again!").css({'color': '#8E5AC3', 'font-style': 'italic'});
                            } else if(three("O")) {
                                $("#res").html("Player O wins!");
                                $("h1").html("Press start to play again!").css({'color': '#8E5AC3', 'font-style': 'italic'});
                            }

                        }
                         
                        if(count == 9 && !three("X") && !three("O")){
                            $("#res").html("No one wins!");
                            $("h1").html("Press start to play again!").css({'color': '#8E5AC3', 'font-style': 'italic'});
                        }

                        count++;   
                    });
       
                }

        }         
        $('#tbl').append($table);
    }

    function three(string) {
        var count1 = 0; 
        var count2 = 0;
        var count3 = 0; 
        var count4 = 0;
        var count5 = 0; 
        var count6 = 0;
        var count7 = 0; 
        var count8 = 0;
        for(var i = 0; i < 3; i++)
            for(var j = 0; j < 3; j++) {
                if (i == j && $('#cell_'+i+j).html() == string) {
                    count1++;
                } 
                if(i + j == 2 && $('#cell_'+i+j).html() == string) {
                    count2++;
                }
            }
        for(var j = 0; j < 3; j++) {
            if($('#cell_0'+j).html() == string) {
                count3++;
            }
            if($('#cell_1'+j).html() == string) {
                count4++;
            }
            if($('#cell_2'+j).html() == string) {
                count5++;
            }
        }
        for(var i = 0; i < 3; i++) {
            if($('#cell_'+i+'0').html() == string) {
                count6++;
            }
            if($('#cell_'+i+'1').html() == string) {
                count7++;
            }
            if($('#cell_'+i+'2').html() == string) {
                count8++;
            } 
        }
                    
        if(count1 == 3 || count2 == 3 || count3 == 3 || count4 == 3 || count5 == 3 || count6 == 3 || count7 == 3 || count8 == 3) {
            $('td').off('click');
            return true;     
        }        
    }

}

$(document).ready(main);