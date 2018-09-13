/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function() {
  //console.log('trigger');
  // Test / driver code (temporary). Eventually will get this from the server.
  $(function() {
    var $button = $('input');
    $button.on('click', function (event) {
      event.preventDefault();
      console.log('Button clicked, performing ajax call appJS');
      let $formdata = $( 'form' ).serialize();
      //const safeHTML = `<p>${escape(textFromUser)}</p>`;
      if($formdata.length > 5){
        $.ajax('/tweets', {method: 'POST' , data: $formdata})
        .then(function (tweet) {
          console.log('Success: ', tweet);
          let $tweet = createTweetElement(tweet);
          $('#posted-tweet-container').prepend($tweet);
        });
      } else if ($formdata.length === 5) {
        alert("Your cannot send empty content.");
      }
    });
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

    let date = new Date(tweet.created_at*1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    let $footerDate = $(`<span>${formattedTime}</span>`);
    let $footerFlag = $("<img class='flag' src='/images/bird.png' height='20px' width='20px'>");
    let $footerRetweet = $("<img class='retweet' src='/images/bird.png' height='20px' width='20px'>");
    let $footerLike = $("<img class='like' src='/images/bird.png' height='20px' width='20px'>");
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
