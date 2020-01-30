var player = ["Michael Jordan", "Kobe Bryant", "Damian Lillard", "Vince Carter", "Dwayne Wade", "Lebron James", "Carmelo Anthony"];

var button;
var newPlayer = "";

var newButton = function() {
    $("#buttonArea").empty();
    for(i =0; i < topics.length; i++) {
        button = $("<input id=" + "button" + ">" + topics[i] + "</button>").addClass("btn btn-warning").attr("value",topics[i]);
        $("#buttonArea").append(button);
    };

}

$()



