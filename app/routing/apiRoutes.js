var friendData = require('../data/friends.js');
var path = require("path");

module.exports = function(app) {

	app.get('/api/friends', function(req, res){
		res.json(friendData);
	});

	app.post('/api/friends', function (req, res) {
  		console.log(req.body);
  		friendData.push(req.body);
  		res.json(true);

  		function findDiff(friendData) {

  			console.log("Inside findDiff function");

			var currentURL = window.location.origin;
			var diffMatch = [];

			$.post(currentURL + "/api/friends", newFriend, function(data){

				console.log("Inside post function");

				for (var i=0; i<friendArray.length; i++) {

					var origMatch = friendArray[i].scores;
					console.log("Friend Array pick: " + currUser);

						var newMatch = newFriend.scores;

						diffNum = Math.abs(origMatch[i] - newMatch);
					    		diffMatch.push(diffNum);
				}

		        	console.log("Match data " + diffMatch);
		     });

		};


		findDiff();

	});

}