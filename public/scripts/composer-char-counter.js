$(document).ready(function() {
  // --- our code goes here ---
  console.log('HTML ready.');

  $(".tweetarea").keyup(function() {

    var text = $( this ).val();
    var length = text.length;
    var remainLength = 140 - Number(length);
    $(".counter").text(remainLength);
    if(remainLength <= 0){
      $(this).css('color', 'red');
      alert("Your text exceed allowance.");
    } else {
      $(this).css('color', 'black');
    }
  });
  /*
  $("#posted-tweet").mouseenter(function() {
    console.log('123');
    $( this ).fadeTo( "fast", 0.33 );
  });
  $("#posted-tweet").mouseout(function() {
    $( this ).fadeTo( "fast", 1 );
  });
  */

});

