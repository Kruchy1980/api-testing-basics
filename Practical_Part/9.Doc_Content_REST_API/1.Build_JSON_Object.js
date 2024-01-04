// THIS PART IS DEDICATED TO HOW TO BUILD AND USE JSON OBJECTS IN API TESTING
/* The Correct JSON file content is in the file: "data.json" in the same folder 
1. URL for JSON object verification: "https://jsonformatter.org"
2. For the Vereification paste json response from URL: "https://naukaapi.testoneo.com/api/users/"
3. Paste the Verified/Formatted JSON content from step no 2 to file data.json in this folder
====== API + REST Intro
Prepare the JSON and add it to the file data_1.json
Rules - what JSON Should include:
1. List of objects
2. Each object should contain 
    - user with name value
    - address with nested object - city with value
3. List should contain at least 2 different objects
4. Add the JSON list to data_1.json file (created in this folder)
==== Using JSON in Programming languages libraries:
1. Go under URL: "https://naukaapi.testoneo.com/5/"
2. Open DevTools
3. Refresh the page
4. Open script.js --> Response
RESULT:
As we can see the library used to properly display JSON data on GUI is named as .parse(<object>)
Example the data received from backend must be parsed to be displayed:
1. JSON.parse(this.response); <== method parse used
2. const data = JSON.parse(this.response); <== assigning to variable for later use
3. console.log(data['title']); <== it is how we can display in console the value from object retrived
====== Live documentation (based on "https://naukaapi.testoneo.com") --> Description in "Section_9.md" file
1. URL for the main docucumentation: "https://naukaapi.testoneo.com/doc/"
2. URL's for separate resources:
- "https://naukaapi.testoneo.com/api/users/"
- "https://naukaapi.testoneo.com/api/logo/"
- "https://naukaapi.testoneo.com/api/lessons/5/"
*/