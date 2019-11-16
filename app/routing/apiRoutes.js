var friendsData = require('../data/friends')



module.exports = function(app) {

    app.get ("/api/friends", function(req, res) {
        res.json(friendsData);
    });
    
    app.post("/api/friends", function(req, res) {
        friendsData.push(req.body);
          res.json(true);
    })
    
    app.post("/api/match", function(req, res) {
        var object = {
            name: "", 
            pic: "", 
            score: Infinity
        }
        var scoreCounter;
        var userInfo = req.body;

        for (var i = 0; i < friendsData.length; i++) {
            scoreCounter = 0;
            let friends = friendsData[i];
            console.log(friends);
            console.log(scoreCounter);
            console.log(object.score);
        
            for (let j = 0; j < friends.scores[j]; j++) {

                scoreCounter += Math.abs(userInfo.scores[j] - friends.scores[j]);
                if (scoreCounter <= object.score) {
                    console.log("Best match: " + friends.name);
                    object.name = friends.name;
                    object.photo = friends.photo;
                    object.score = scoreCounter;
                }
            }
        }
        friendsData.push(req.body);
        res.json(object);
        res.status(200)
    })

    };

