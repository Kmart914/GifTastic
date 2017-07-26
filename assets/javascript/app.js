$( document ).ready(function() {

  var topics = ["amg", "bmw", "gt350", "mclaren", "lamborghini", "ferrari", "koenigsegg", "bugatti"]


  function displayGifs(){

  var type = $(this).attr("data-name");
  var queryURL = $.get("http://api.giphy.com/v1/gifs/search?q="
  + type + "&api_key=a97091ac30ef41c28c305c9660213a24&limit=5");

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response){
    console.log(response);

    var gifs = response.images.url;

    $("#gifs").html('<img src="' + gifs + '" />')

  })


}
  function displayButtons() {
    $("#buttons").empty();
    for (var i = 0; i < topics.length; i++){
    var btn = $("<button>");
    btn.addClass("topic");
    btn.attr("data-name", topics[i]);
    btn.text(topics[i]);
    $("#buttons").append(btn);
  }
}

  $("#addGif").on("click", function(event){
    event.preventDefault();
    var gif = $("#gifInput").val().trim();
    topics.push(topic);

  });

  $(document).on("click", ".topic", displayGifs);
  displayButtons();




});
