// THIS FILE CONTAINS PRACTICAL EXAMPLES OF PUT METHOD
/*
==== Update random Article
Method: PUT
Endpoint: "https://olive-nasal-game.glitch.me/api/:resource/:id";  where :resource == aricles, id == id of Article
Request body:
{
  "user_id": 0, // --> fixed value only
  "title": "{{$randomLoremWords}}",
  "body": "{{$randomLoremParagraph}}",
  "date": "{{$isoTimestamp}}",
  "image": "https://cdn.pixabay.com/photo/2023/12/06/08/41/mountain-8433234_640.jpg" //--> fixed value only
}
==== PUT- Creation - always different ID - dynamic variable used in Endpoint
We can use timestamps in Body and Endpoint
Endpoint example: "https://olive-nasal-game.glitch.me/api/:resource/{{$timestamp}}"
Request body Example - with more precise timestmp for user_id
Variable Preparation:
Customized variable we can prepare in Pre-request Script for example:
// create own variable and use in Endpoint
pm.variables.set('timestampMS', new Date().getTime()); <--The customized variable name is in quotes and can be used anywhere as:
{{timestampMS}}
== Endpoint prepared: "https://olive-nasal-game.glitch.me/api/:resource/{{timestampMS}}"
Request body with embedeed timestamp as Id
{
  "user_id": "{{newId}}", 
  "title": "{{$randomLoremWords}}",
  "body": "{{$randomLoremParagraph}}",
  "date": "{{$isoTimestamp}}",
  "image": "https://cdn.pixabay.com/photo/2023/12/06/08/41/mountain-8433234_640.jpg"
}
==== Script with customized variables used in the Endpoint URL and Request body:
console.clear(); //<-- Added to clear console each request sending
// create own variable and use in Endpoint
pm.variables.set('timestampMS', new Date().getTime());
// preparing newId variable - for user_id
pm.variables.set('newId', Math.round(Math.random() * 90));
// Display the user_id variable
console.log('new userId: ', pm.variables.get('newId')); //<-- displayinfg the customized variable
// Display the id variable
console.log('timestamp ms:', pm.variables.get('timestampMS')); //<-- displayinfg the customized variable
*/