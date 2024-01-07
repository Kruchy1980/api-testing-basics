// THIS FILE CONTAINS THE EXERCISE FOR AUTHORIZATION IN POSTMAN
/* Examples - Headers in Postman:
========= 1.Create Article
Method: POST
Endpoint: https://olive-nasal-game.glitch.me/api/:resource --> Where :resource == articles
# Request Body:
{
    "user_id": {{newId}},
    "title": "{{$randomWords}}",
    "body": "{{$randomLoremText}}",
    "date": "{{$isoTimestamp}}",
    "image": "https://cdn.pixabay.com/photo/2023/11/21/21/36/mountains-8404275_640.jpg"
}
=== Results in Headers tab of created to be verified in Postman - the most importantg are:
Postman-Token: "8dcb77a2-c577-42bb-9532-7c1ccc18b1f6" <-- added automatically in Postman to make Authentication
Accept: "* / *" <-- Here needed to add them with space it allows to display any format of files
*/