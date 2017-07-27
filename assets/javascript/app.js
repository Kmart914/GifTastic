$( document ).ready(function() {

//Array that will hold all of the choices for gifs
var topics = ["amg", "bmw", "gt350", "mclaren", "lamborghini", "ferrari", "koenigsegg", "bugatti"];

//This is getting the text from the button.
var type = $(this).attr("data-name");

  //Function to pull and display Gifs on the page.
  function displayGifs(){
    var apiKey = "&api_key=a97091ac30ef41c28c305c9660213a24"
    var type = $(this).attr("data-name");
    var queryURL ="https://api.giphy.com/v1/gifs/search?q="
    + type + apiKey + "&limit=10";
    $("#gifs").empty();

    //ajax call and loop through the array in giphys response to pull all the different Gifs.
    $.ajax({
    url: queryURL,
    method: "GET"
      }).done(function(response){
        var gifs = response.data;
        for(var i = 0; i < gifs.length; i++){
        $("#gifs").append('<img src="' + gifs[i].images.fixed_width.url + '" />')
    }

  })


}
  //This is looping through the topics array to create buttons for each topic.
  function displayButtons() {
    $("#buttons").empty();
    for (var i = 0; i < topics.length; i++){
    var a = $("<button type='submit' id='carButtons' class='btn btn-primary btn-large'>");
    a.addClass("topic");
    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    $("#buttons").append(a);
  }
}
  //This gives the user the ability to add a new button for them to get gifs with.
  $("#addGif").on("click", function(event){
    event.preventDefault();
    var gif = $("#add-gif").val().trim();
    topics.push(gif);
    displayButtons();



  });

  //This is calling the displayGifs and displayButtons function on click of ".topic".
  $(document).on("click", ".topic", displayGifs);
  displayButtons();




});
