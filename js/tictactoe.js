function main() {
    var $table, $tr, $td;
    var moves;
    var position;
    var end;
    var count =[];
    

    $('#start').click(function() {
        $('#tbl').empty();
        moves = 0;
        position = -1;
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
                        moves++;
                        if(!end && moves % 2 == 1) {
                           $(this).html('X').off('click').addClass("clicked");
                           if(moves >= 5 && moves <= 9) {
                                if(sequenceOf("X", 3)[0]) {
                                    gameOver("X");
                                } else {
                                    position = -1;
                                }
                            }
                        }

                        if(moves == 9 && sequenceOf("X", 3)[0] == false && sequenceOf("O", 3)[0] == false) {
                            $("#res").html("No one wins!");
                            $("h1").html("Press start to play again!").css({'color': '#8E5AC3', 'font-style': 'italic'});
                            position = -1;
                        }
                        
                        moves++;
                        if(!end && moves % 2 == 0) {
                            if(sequenceOf("O", 2)[0] && !$('td').eq(position).hasClass("clicked")) { 
                                $('td').eq(position).html('O').off('click').addClass("clicked");
                            } else if(sequenceOf("X", 2)[0] && !$('td').eq(position).hasClass("clicked")) {
                                $('td').eq(position).html('O').off('click').addClass("clicked");
                            } else {
                                $('td').not(".clicked").first().html('O').off('click').addClass("clicked");
                            }
                            
                            if(moves > 5 && moves < 9) {
                                if(sequenceOf("O", 3)[0]) {
                                    gameOver("O");
                                } else {
                                    position = -1;
                                }
                            }
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
                    } else {
                        if(!$('#cell_'+i+j).hasClass("clicked")) {
                            position = $('#cell_'+i+j).index() + 3*i;
                            console.log(position);
                        }  
                    } 
                }
            if(count[0] == n) {
                return [true, position];     
            }
        }
        
        
        for(var i = 0; i < 3; i++)
            for(var j = 0; j < 3; j++) {
                if(i + j == 2) {
                    if($('#cell_'+i+j).html() == char){
                        count[1]++; // line /
                    } else {
                        if(!$('#cell_'+i+j).hasClass("clicked")) {
                            position = $('#cell_'+i+j).index() + 3*i;
                            console.log(position);
                        }  
                    }
                }
            if(count[1] == n) {
                return [true, position];     
            }
        }
        
        
        for(var j = 0; j < 3; j++) {
            if($('#cell_0'+j).html() == char) {
                count[2]++; // first row
            } else {
                if(!$('#cell_0'+j).hasClass("clicked")) {
                    position = $('#cell_0'+j).index();
                    console.log(position);
                }   
            }
        }
        if(count[2] == n) {
            return [true, position];     
        }

        for(var j = 0; j < 3; j++) {
            if($('#cell_1'+j).html() == char) {
                count[3]++; // second row
            } else {
                if(!$('#cell_1'+j).hasClass("clicked")) {
                    position = $('#cell_1'+j).index() + 3*1;
                    console.log(position);
                }   
            }
        }
        if(count[3] == n) {
            return [true, position];     
        }
            
        for(var j = 0; j < 3; j++) {
            if($('#cell_2'+j).html() == char) {
                count[4]++; // third row
            } else {
               if(!$('#cell_2'+j).hasClass("clicked")) {
                    position = $('#cell_2'+j).index() + 3*2;
                    console.log(position);
                }   
            }
        }
         if(count[4] == n) {
            return [true, position];     
        }
        
        for(var i = 0; i < 3; i++) {
            if($('#cell_'+i+'0').html() == char) {
                count[5]++; // first column
            } else {
               if(!$('#cell_'+i+'0').hasClass("clicked")) {
                    position = $('#cell_'+i+'0').index() + 3*i;
                    console.log(position);
                }   
            }
        }
        if(count[5] == n) {
            return [true, position];     
        }

        for(var i = 0; i < 3; i++) {
            if($('#cell_'+i+'1').html() == char) {
                count[6]++; // second column
            } else {
               if(!$('#cell_'+i+'1').hasClass("clicked")) {
                    position = $('#cell_'+i+'1').index() + 3*i;
                    console.log(position);
                }   
            }
        }
        if(count[6] == n) {
            return [true, position];     
        }
            
        for(var i = 0; i < 3; i++) {
            if($('#cell_'+i+'2').html() == char) {
                count[7]++; // third column
            } else {
               if(!$('#cell_'+i+'2').hasClass("clicked")) {
                    position = $('#cell_'+i+'2').index() + 3*i;
                    console.log(position);
                }   
            }
        }
        if(count[7] == n) {
            return [true, position];     
        }

        console.log(char);
        console.log(moves);
        console.log(count);
        return [false, -1];
    }

    function gameOver(char) {
        $('td').off('click');
        $("#res").html("Player " +char +" wins!");
        $("h1").html("Press start to play again!").css({'color': '#8E5AC3', 'font-style': 'italic'});
        end = true;
    }

}

$(document).ready(main);