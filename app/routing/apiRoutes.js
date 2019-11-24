
 //need this file path to make sure we retrieve the correct HTML file 
 var path = require("path");

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends
// ===============================================================================
//this var is for the friends.js file that has the friends array
var friendData = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
      //this will display the JSON of all possible friends
    res.json(friendData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
     console.log("Hey Route")
      console.log("From front-end" +req.body);
      console.log("Scores" + req.body.scores)
    

 //app.post to get the information from the submit button 
//post route /api/friends used to handle incoming survey results. this route also handles the compatibility logic.
    
    //this gets replaced after we find the difference of the 2 scores only IF it is lower
   
    //closest score will be replaced with the best match score 
    var difference = 0;
    var closestMatch = 50;
    var closestScore = 0;
    var userScore = req.body;

    

  

    
// loop over friends array
    for(var i = 0; i < friendData.length; i++){
      console.log("Friends:" );
      //shows friend within the array
      console.log(friendData[i])
      console.log("Shows the friend's array Score:" + friendData[i].scores);
  
      // inside that loop, loop over friends[i].surveyResponsesArray
      for(var j = 0; j < userScore.scores.length; j++){
        console.log("The user Survey score: ")
        console.log(userScore);
         //compare each survey response with the survey response of the user
         difference += Math.abs(parseInt(userScore.scores[j]) - friendData[i].scores[j]);
        };
        console.log("this is the difference:")
        console.log(difference);
      
        
        if(difference < closestMatch){
          console.log("within if statement:")
        closestMatch = difference;
        closestScore = i;
        
    }
    

}
//end of first for loop


//best match friend object that needs to be pushed to the front end
   res.json(friendData[closestScore]);
  
    //push to friends array
    friendData.push(userScore);

  
    });
    //end of app-post function

   }


    