/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function() {
  //console.log('trigger');
  // Test / driver code (temporary). Eventually will get this from the server.
  var composeButton = $('.composeButton');
  composeButton.on('click', function(){
    console.log('Compose Button clicked');
    $(".new-tweet").slideToggle(150);
    $("textarea").focus().click();
  })
  var $button = $('input');
  $button.on('click', function (event) {
    event.preventDefault();
    console.log('Button clicked, performing ajax call appJS');

    const unsafeHTML = $('.tweetarea').val();
    $('.tweetarea').val(escape(unsafeHTML));

    let $formdata = $( 'form' ).serialize();

    if($formdata.length > 5 && $formdata.length < 145){
      $.ajax('/tweets', {method: 'POST' , data: $formdata})
      .then(function (tweet) {
        console.log('Success: ', tweet);
        let $tweet = createTweetElement(tweet);
        $('#posted-tweet-container').prepend($tweet);
        $('.tweetarea').val('');
      });
    } else if ($formdata.length === 5) {
      //alert("Your cannot send empty content.");
      $(".error").css("display", "block");
    }
  });

  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function createTweetElement(tweet) {

    let $headerLogo = $(`<img class='userlogo' src=${tweet.user.avatars.small} height='50px' width='50px'>`);
    let $headerUser = $(`<span class='user'>${tweet.user.name}</span>`);
    let $headerUserId = $(`<span class='userid'>${tweet.user.handle}</span>`);
    let $header = $("<header class='tweet-header'></header>").append($headerLogo, $headerUser, $headerUserId);

    let $divContent = $(`<span class='tweet-content'>${tweet.content.text}</span>`);
    let $div = $("<div class='tweet-content-box'></div>").append($divContent);

    let dateCreate = new Date(tweet.created_at);
    let year = dateCreate.getFullYear();
    let month = dateCreate.getMonth() + 1;
    let date = dateCreate.getDate();
    let hours = dateCreate.getHours();
    let minutes = "0" + dateCreate.getMinutes();
    let seconds = "0" + dateCreate.getSeconds();
    let formattedTime = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    let $footerDate = $(`<span>${formattedTime}</span>`);
    let $footerFlag = $("<img class='flag' src='/images/flag.png' height='15px' width='15px'>");
    let $footerRetweet = $("<img class='retweet' src='/images/retweet.png' height='15px' width='15px'>");
    let $footerLike = $("<img class='like' src='/images/like.png' height='15px' width='15px'>");
    let $footer = $("<footer class='tweet-footer'></footer>").append($footerDate, $footerFlag, $footerRetweet, $footerLike);

    let $tweet = $("<section class='posted-tweet'></section>").append("<article class='tweets'></article>").append($header, $div, $footer);

    return $tweet
  }

  function renderTweets(tweets) {
  // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for(let key in tweets){
      var $tweet = createTweetElement(tweets[key]);
      $('#posted-tweet-container').append($tweet);
    }

  }
  function loadTweets(){
    $.ajax('/tweets', {method: 'GET'})
    .then(function (tweets) {
      //console.log('Success: ', tweet[0]);
      renderTweets(tweets);
    });
  }
  loadTweets();
  //var $tweet = createTweetElement(tweetData);
  //renderTweets(data);
  // Test / driver code (temporary)
  //console.log($tweet); // to see what it looks like
  //$('main').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});
