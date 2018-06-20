$(document).ready(function(){

    var displayedButtons = ["The Bourne Identity", "The Bourne Supremacy", "The Bourne Legacy", "Jason Bourne"];

    function displayImg(){

        $("#display-images").empty();
        var input = $(this).attr("data-name");
        var limit = 10;
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&limit=" + limit + "Api Key: 70iBTcVBH680dyEHrvTM3MY3b8oeRHzH";   

        $.ajax({
            url: queryURL, 
            method: "GET"
        }).done(function(response) {

            for(var j = 0; j < limit; j++) {    

                var displayDiv = $("<div>");
                displayDiv.addClass("holder");
            
               

                var rating = response.data[j].rating;
                console.log(response);
                var pRating = $("<p>").text("Rating: " + rating);
                displayDiv.append(pRating)

                $("#display-images").append(displayDiv);
            }
        });
    }

    function renderButtons(){ 

        $("#display-buttons").empty();

        for (var i = 0; i < displayedButtons.length; i++){

            var newButton = $("<button>") 
            newButton.attr("class", "btn btn-default");
            newButton.attr("id", "input")  
            newButton.attr("data-name", displayedButtons[i]); 
            newButton.text(displayedButtons[i]); 
            $("#display-buttons").append(newButton); 
        }
    }

    function imageChangeState() {          

        var state = $(this).attr("data-state");
        var animateImage = $(this).attr("data-animate");
        var stillImage = $(this).attr("data-still");

        if(state == "still") {
            $(this).attr("src", animateImage);
            $(this).attr("data-state", "animate");
        }

        else if(state == "animate") {
            $(this).attr("src", stillImage);
            $(this).attr("data-state", "still");
        }   
    }

    $("#submitPress").on("click", function(){

        var input = $("#user-input").val().trim();
        form.reset();
        displayedButtons.push(input);
                
        renderButtons();

        return false;
    })

    renderButtons();

    $(document).on("click", "#input", displayImg);
    $(document).on("click", ".gif", imageChangeState);
});