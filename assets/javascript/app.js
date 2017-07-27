$( document ).ready(function() {

  var topics = ["amg", "bmw", "gt350", "mclaren", "lamborghini", "ferrari", "koenigsegg", "bugatti"]


  function displayGifs(){

  var type = $(this).attr("data-name");
  var queryURL ="https://api.giphy.com/v1/gifs/search?q="
  + type + "&api_key=a97091ac30ef41c28c305c9660213a24&limit=5";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response){
    console.log(response);

    var gifs = response.data[0].images.preview.mp4;

    $("#gifs").append('<img src="' + gifs + '" />')

    console.log(response.data[0].images.preview.mp4);

  })


}
  function displayButtons() {
    $("#buttons").empty();
    for (var i = 0; i < topics.length; i++){
    var btn = $("<button type='submit' class='btn' 'btn-default'>");
    btn.addClass("topic");
    btn.attr("data-name", topics[i]);
    btn.text(topics[i]);
    $("#buttons").append(btn);
  }
}

  $("#addGif").on("click", function(event){
    event.preventDefault();
    var gif = $("#gifInput").val();
    topics.push(type);

    displayButtons();

  });

  $(document).on("click", ".topic", displayGifs);
  displayButtons();




});
