# Autocomplete-Search
Created by: 
  Amy Tran 

Description: 
  Search function to match cities from user query

How to run:
 1. $ git clone Autocomplete-Search repo 
 2. Move into the Autocomplete-search directory
 3. run $ npm install
 3. run webpack-dev-server --progress --colors
 4. navigate to http://localhost:8080/webpack-dev-server/ in browser 

Thought process: 
Needed to capture user's query by listening to the onChange event 
Capture user's query by grabbing it from the DOM using jQuery
Clean query by trimming spaces and converting query to lower case 
If query is less than three, hint user to type at least three characters
If query is greater than three, traverse cities array and substring each city to match the length of the user's query.
Display each match to the user
