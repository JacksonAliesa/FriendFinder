var path = require('path');

// include a route to get /survey which will display the survey page 
// Basic route that sends the user first to the AJAX Page to get the information that was POSTED from the front-end code
module.exports = function(app) {
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

// a default, catch-all route that leads to index.html which displays the home page
/////code here

}




