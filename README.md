# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.

## Getting Started

### Prepare your MongoDB sample database
1. To start the Mongo command line interface (CLI)
	> mongo
2. Try show dbs to list the available databases:
	> show dbs
3. switched to db tweeter
	> use tweeter
4. WriteResult({ "nInserted" : 1 })
	> db.test.insert({"message":"hello world"})
5. show all database
	> show dbs
6. print your "test" collection
	> db.test.find()
7. var tweets = [
				  {
				    "user": {
				      "name": "Newton",
				      "avatars": {
				        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
				        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
				        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
				      },
				      "handle": "@SirIsaac"
				    },
				    "content": {
				      "text": "If I have seen further it is by standing on the shoulders of giants"
				    },
				    "created_at": 1461116232227
				  },
				  {
				    "user": {
				      "name": "Descartes",
				      "avatars": {
				        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
				        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
				        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
				      },
				      "handle": "@rd" },
				    "content": {
				      "text": "Je pense , donc je suis"
				    },
				    "created_at": 1461113959088
				  },
				  {
				    "user": {
				      "name": "Johann von Goethe",
				      "avatars": {
				        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
				        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
				        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
				      },
				      "handle": "@johann49"
				    },
				    "content": {
				      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
				    },
				    "created_at": 1461113796368
				  }
				]
8. insert var tweets into collection tweets
	> db.tweets.insert(tweets)
9. print tweets collection
	> db.tweets.find()

### Start your local server
1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Final Product

!["screenshot description"](https://github.com/nicholasyyu/tweeter/blob/master/docs/tweeter1.png?raw=true)

## Dependencies

- Express
- Node.js
- EJS
- body-parser
- chance
- md5
- mongoDB
- nodemon
