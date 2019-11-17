var friendsData = require('../data/friends')
console.log('friendsData', friendsData)



module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        friendsData.push(req.body);
        res.json(true);
    })

    app.post("/api/match", function (req, res) {
        var object = {
            name: "",
            pic: "",
            score: Infinity
        }
        var scoreCounter;
        var userInfo = req.body;

        // might start with 0
        // track with new user is the lowest and their score with is now the new 0

        for (var i = 0; i < friendsData.length; i++) {
            scoreCounter = 0;
            var friends = friendsData[i];
            // console.log(friends);
            console.log(scoreCounter);
            console.log(object.score);

            for (var j = 0; j < friends.score[j]; j++) {
                // console.log('friends', friends)
                scoreCounter += Math.abs(userInfo.score[j] - friends.score[j]);
                if (scoreCounter <= object.score) {
                    console.log("Best match: " + friends.name);
                    object.name = friends.name;
                    object.pic = friends.pic;
                    object.score = scoreCounter;
                }
            }
        }

        friendsData.push(req.body);
        res.json(object);
        res.status(200)
    })

};