$(document).ready(function(){ 



var topics = [];

  // Generic function for capturing the movie name from the data-attribute
      function alertGifName() {
        var gifName = $(this).attr("data-name");
        alert(gifName);
      }
      // Function for displaying movie data
      function renderButtons() {
        // Deleting the gifs prior to adding new movies
        // (this is necessary otherwise we will have repeat buttons)
        $("#gif-view").empty();
        // Looping through the array of movies
        for (var i = 0; i < topics.length; i++) {
        	console.log(topics);
          // dynamicaly generating buttons for each gif in the array         
          var a = $("<button>");
          // Adding a class of gif to our button
          a.addClass("gif");
          // Adding a data-attribute
          a.attr("data-name", topics[i]);
          // Providing the initial button text
          a.text(topics[i]);
          // Adding the button to the HTML
          $("#gif-view").append(a);
        }
      }
      // This function handles events where one button is clicked
      $("#add-gif").on("click", function(event) {
        // Preventing the buttons default behavior when clicked (which is submitting a form)
        event.preventDefault();
        // This line grabs the input from the textbox
        var gif = $("#gif-input").val().trim();
        // Adding the movie from the textbox to our array
        topics.push(gif);
        // Calling renderButtons which handles the processing of our gif topics array
        renderButtons();
      });
      // Function for displaying the movie info
      // We're adding a click event listener to all elements with the class "gif"
      // We're adding the event listener to the document because it will work for dynamically generated elements
      // $(".movies").on("click") will only add listeners to elements that are on the page at that time
      $(document).on("click", ".gif", alertGifName);
      // Calling the renderButtons function to display the intial buttons
      renderButtons();






















});