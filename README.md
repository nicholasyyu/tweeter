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
7. find var tweet in folder "docs" and copy sample data.
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
