function main() {
    var isHere = false;
    var $table, $tr, $td;
    var count = 1;
    $('#start').click(function() {
        if (!isHere) {
            $table = $("<table>");
            $('#tbl').append(function() {
                for (var i = 0; i < 3; i++) {
                    $tr = $('<tr>');
                    $table.append($tr);
                    for (var j = 0; j < 3; j++) {
                        $td = $('<td>');
                        $td.attr("id", "cell_" + count);
                        $td.click(function() {
                            if (count % 2 == 0) {
                                $(this).html('O').css('cursor', 'not-allowed');
                            } else {
                                $(this).html('X').css('cursor', 'not-allowed');
                            }
                            count++;

                            /*if ($td.html() == "X" && $td.next().html() == "X" && $td.next().next().html() == "X") {
                                $("res").html("Player X win");
                            } else if ($td.html() == "O" && $td.next().html() == "O" && $td.next().next().html() == "O") {
                                $("res").html("Player O win");
                            } else {
                                $("res").html("No one wins");
                            }*/
                        });
                        $tr.append($td);
                    }
                }
                isHere = true;
                return $table;
            });
        }
    });
}

/*function refresh() {
    if ($td.html() == "X" && $td.next().html() == "X" && $td.next().next().html() == "X") {
        $("res").html("Player X win");
    } else if ($td.html() == "O" && $td.next().html() == "O" && $td.next().next().html() == "O") {
        $("res").html("Player O win");
    } else {
        $("res").html("No one wins");
    }
}*/

$(document).ready(main);