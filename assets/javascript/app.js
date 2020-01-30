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

$("#buttonArea").on("click", ".btn", function() {
    var nbaPlayer = $(this).attr("value");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + nbaPlayer + "&api_key=W6YKm1POrmvo2qhLsDcOWMWvofcj9zSu&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET" 
    
    }).done(function(response){
        console.log(response);

    var results = response.value;

    for (var i = 0; i < results.length; i++) {
        var topicDiv = $("<div>");

            var p = $("<p>");
            p.text(results[i].rating);
            var p = $("<p>").text("Rating: " + resluts[i].rating);

            var topicImage = $("<img>").addClass("orangeBorder");

            topicImage.attr("src", results[i].images.fixed_height_still.url);
	 		topicImage.attr("data-still", results[i].images.fixed_height_still.url);
	 		topicImage.attr("data-animate", results[i].images.fixed_height.url)
	 		topicImage.attr("data-state", "still")
            topicImage.addClass("gif");

            topicDiv.append(topicImage);
	 		topicDiv.append(p); 			
	 		$("#gif-row").prepend(topicDiv);
 	    }
  	})
})

$("#gif-row").on("click", ".gif", function(event){
	event.preventDefault();
	
	var state = $(this).attr("data-state");
	 
	if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
    
    } 
  
    else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }

})

$(".submit").on("click", function(event){
	event.preventDefault();

	console.log("submit");
	newTopic = $("#input").val();
	topics.push(newTopic);
	console.log(topics);
	newButton();
});
             




