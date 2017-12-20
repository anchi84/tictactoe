function main() {
    var $table, $tr, $td;
    var moves = 1;
    var end;
    var count =[];
    var cell = [];

    $('#start').click(function() {
        $('#tbl').empty();
        moves = 1;
        end = false;
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
                        /*if (moves % 2 == 0) {
                            $(this).html('O').off('click');
                        } else {
                            $(this).html('X').off('click');
                        }*/
                        if(!end) {
                           $(this).html('X').off('click').addClass("clicked");
                           if(moves >= 5 && moves <= 9) {
                                if(sequenceOf("X", 3)) {
                                    gameOver("X");
                                }
                            }
                            moves++;
                        }
                        
                        if(!end) {
                            if(sequenceOf("O", 2)) {
                               /* m = jQuery.inArray(2, count);*/
                                freeCell().html('O').off('click').addClass("clicked");
                            } else if(sequenceOf("X", 2)) {
                                freeCell().html('O').off('click').addClass("clicked");
                            } else {
                                $('td').not(".clicked").first().html('O').off('click').addClass("clicked");
                            }
                           
                            if(moves >= 5 && moves <= 9) {
                                if(sequenceOf("O", 3)) {
                                    gameOver("O");
                                } 
                            }
                            moves++;
                        }
                         
                        if(moves == 9 && !sequenceOf("X", 3) && !sequenceOf("O", 3)) {
                            $("#res").html("No one wins!");
                            $("h1").html("Press start to play again!").css({'color': '#8E5AC3', 'font-style': 'italic'});
                        }
   
                    });
       
                }

        }         
        $('#tbl').append($table);
    }

    function sequenceOf(char, n) {
        
        for(var k = 0; k < 8; k++) {
            count[k] = 0;
        }

        for(var i = 0; i < 3; i++)
            for(var j = 0; j < 3; j++) {
                if (i == j) {
                    if($('#cell_'+i+j).html() == char){
                        count[0]++; // line \
                    }
                }

                if(i + j == 2) {
                    if($('#cell_'+i+j).html() == char){
                        count[1]++; // line /
                    }
                }
            }
        
        for(var j = 0; j < 3; j++) {
            if($('#cell_0'+j).html() == char) {
                count[2]++; // first row
            }

            if($('#cell_1'+j).html() == char) {
                count[3]++; // second row
            }
            
            if($('#cell_2'+j).html() == char) {
                count[4]++; // third row
            }
        }
        
        for(var i = 0; i < 3; i++) {
            if($('#cell_'+i+'0').html() == char) {
                count[5]++; // first column
            }
            
            if($('#cell_'+i+'1').html() == char) {
                count[6]++; // second column
            }
            
            if($('#cell_'+i+'2').html() == char) {
                count[7]++; // third column
            }
        }
        
        console.log(count);

        for(var k =0; k < 8; k++) {
            if(count[k] == n) {
                return true;     
            } 
        }
        
        return false; 
    }

    function freeCell() {
        for(var i = 0; i < 3; i++)
            for(var j = 0; j < 3; j++) {
                if (i == j) {
                    if($('#cell_'+i+j).html() == char){
                        count[0]++; // line \
                        continue;
                    } else return $('#cell_'+i+j);
                }

                if(i + j == 2) {
                    if($('#cell_'+i+j).html() == char){
                        count[1]++; // line /
                        continue;
                    } else return $('#cell_'+i+j);
                }
            }
        
        for(var j = 0; j < 3; j++) {
            if($('#cell_0'+j).html() == char) {
                count[2]++; // first row
                continue;
            } else return $('#cell_0'+j);

            if($('#cell_1'+j).html() == char) {
                count[3]++; // second row
                continue;
            } else return $('#cell_1'+j);
            
            if($('#cell_2'+j).html() == char) {
                count[4]++; // third row
                continue;
            } else return $('#cell_2'+j);
        }
        
        for(var i = 0; i < 3; i++) {
            if($('#cell_'+i+'0').html() == char) {
                count[5]++; // first column
                continue;
            } else return $('#cell_'+i+'0');
            
            if($('#cell_'+i+'1').html() == char) {
                count[6]++; // second column
                continue;
            } else return $('#cell_'+i+'1');
            
            if($('#cell_'+i+'2').html() == char) {
                count[7]++; // third column
                continue;
            } else return $('#cell_'+i+'2');
        }
    }

    function gameOver(char) {
        $('td').off('click');
        $("#res").html("Player " +char +" wins!");
        $("h1").html("Press start to play again!").css({'color': '#8E5AC3', 'font-style': 'italic'});
        end = true;
    }

}

$(document).ready(main);