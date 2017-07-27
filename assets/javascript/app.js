$( document ).ready(function() {

  var topics = ["amg", "bmw", "gt350", "mclaren", "lamborghini", "ferrari", "koenigsegg", "bugatti"]
  var type = $(this).attr("data-name");


function displayGifs(){
  var apiKey = "&api_key=a97091ac30ef41c28c305c9660213a24"
  var type = $(this).attr("data-name");
  var queryURL ="https://api.giphy.com/v1/gifs/search?q="
  + type + apiKey + "&limit=10";
  $("#gifs").empty();


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

      $("#addGif").on("click", function(event){
        event.preventDefault();
        var gif = $("#add-gif").val().trim();
        topics.push(gif);
        displayButtons();
         gif = gif.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');


  });

  $(document).on("click", ".topic", displayGifs);
  displayButtons();




});
