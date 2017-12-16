function main() {
    var tableMade = false;
    var $table, $tr, $td;
    var count = 1;

    $('#start').click(function() {
        if (!tableMade) {
             tableMade = true;
        } else {
            $table.remove();
            count = 1;
            tableMade = false;
        }
        refresh();
        $("#res").html("");
    });

    function refresh(){
        $table = $("<table>");
        for (var i = 0; i < 3; i++) {
            $tr = $('<tr>');
                $table.append($tr);
                for (var j = 0; j < 3; j++) {
                    $td = $('<td>');
                    $td.attr("id", "cell_" +i +j);
                    $tr.append($td);
                    console.log($td.attr("id"));
                    $td.on('click', function() {
                        if (count % 2 == 0) {
                            $(this).html('O').off('click');
                        } else {
                            $(this).html('X').off('click');
                        }
                        
                        if(count >= 5 && count < 9) {
                            if(three("X")) {
                                $("#res").html("Player X wins");
                            } else if(three("O")) {
                                $("#res").html("Player O wins");
                            }
                            
                            /*if($('#cell_00').html() == "X" && $('#cell_01').html() == "X" && $('#cell_02').html() == "X") {
                                $("#res").html("Player X wins");
                            } else if($('#cell_00').html() == "O" && $('#cell_01').html() == "O" && $('#cell_02').html() == "O") {
                                $("#res").html("Player O wins");
                            }*/

                        } else if(count == 9){
                            $("#res").html("No one wins");
                        }


                        count++;   
                    });
       
                }

        }         
        tableMade = true;
        $('#tbl').append($table);

        function three(string) {
            var count1 = 0; 
            var count2 = 0;
            for(var i = 0; i < 3; i++)
                for(var j = 0; j < 3; j++) {
                    if (i == j && $('#cell_'+i+j).html() == string) {
                       count1++;
                    } 
                    if(i + j == 2 && $('#cell_'+i+j).html() == string) {
                        count2++;
                    }
                }
                    
            if(count1 == 3 || count2 == 3) {
                $('td').off('click');
                return true;     
            }
                 
        }
                                 

    }

}

$(document).ready(main);