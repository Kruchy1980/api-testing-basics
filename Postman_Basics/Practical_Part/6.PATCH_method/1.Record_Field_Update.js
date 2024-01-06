// THIS FILE IS DEDICATED TO PATCH METHOD USED FOR OBJECT FIELD ACTUALIZATION
/* 
=== 1. PATCH usage (Articles) -- we need to remember that the object must be existing
Method: PATCH
Endpoint: "https://olive-nasal-game.glitch.me/api/:resource/:id"
Endpoint Final fixed: "https://olive-nasal-game.glitch.me/api/articles/2" //<-- or one script can be added to generate existed id and not existed let's say 10:
--- Pre-request code
console.clear();
pm.variables.set('articleId', Math.round(Math.random() * 10));
Endpoint Final fixed: "https://olive-nasal-game.glitch.me/api/articles/{{articleId}}" //<-- The articleId must be true
==== Body can be any with the following keyword: (Need to remember that only one from all of the object values can be changed)
{
  "user_id": "{{newId}}",  
  "title": "{{$randomLoremWords}} - Patched",
  "body": "{{$randomLoremParagraph}} - Patched"
  "date": "{{$isoTimestamp}} - Patched",
  "image": "https://cdn.pixabay.com/photo/2023/12/12/16/11/mountain-8445543_640.jpg" 
}
=== !!!! Similar thing we can do with the user
Request body:
{
  "email": "{{$randomExampleEmail}}",
  "firstname": "{{$randomFirstName}}",
  "lastname": "{{$randomLastName}}",
  "password": "{{$randomBs}}",
  "avatar": "https://cdn.pixabay.com/photo/2023/11/30/07/04/shetland-sheepdog-8420917_640.jpg"
}
Script Variable:
pm.variables.set('userId', Math.round(Math.random() * 20));
Endpoint Final fixed: "https://olive-nasal-game.glitch.me/api/articles/{{userId}}" //<-- The userId must be true
========= Adding automatical test which verifies vsalue of JSON response
Example:
// Verify whether Id is lesser than 21
pm.test("Id is less than 21", () => {
    let jsonData = pm.response.json();
    console.log('Received response: ', jsonData.id);
    pm.expect(jsonData.id).to.below(21);
});
*/