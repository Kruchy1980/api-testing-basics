// THIS FILE IS DEDICATED TO EXERCISES DESCRIPTION FOR RESOURCE CREATION AND DYNAMIC REQUEST PARAMETRIZATION
/* 
===== 1.Method: POST
Endpoint: *https://olive-nasal-game.glitch.me/api/:resource* where :resource == users
### Steps:
1. Prepare Endpoint and Set proper method in Postman
2. Add Request body - as following (**example only**):
```
{
  "email": "beauty@example.com",
  "firstname": "Johny",
  "lastname": "Bravo",
  "password": "myStrongPassword",
  "avatar": "face_1591133060.68834.jpg"
}
```
3. We can add status test - for creation the status is mostly 201 so we can add such a part of code inside the body tab
```
pm.test('should have status code 201', () => {
    pm.response.to.have.status(201);
});
```
4. Send the request and verify the response body (*example only*):
```
{
    "email": "beauty@example.com",
    "firstname": "Johny",
    "lastname": "Bravo",
    "password": "myStrongPassword",
    "avatar": "face_1591133060.68834.jpg",
    "id": 12
}
```
5. And verify status code is 201
6. Very Good 
!!! It is important to see that the avatar is not displayed - to correct the bug use in avatar proprer any picture address
==== 2. User Creation with proper avatar address
The steps are the same but the only difference is in the Request body --> see below code (Request body):
{
  "email": "beauty_good@example.com", //<-- must be unique
  "firstname": "Johny",
  "lastname": "Bravo - Good avatar",
  "password": "myStrongPassword",
  "avatar": "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600" //<-- Proper avatar path added
}
=== 3. Not unique email conflict
1. Send the same Creation once more without changing data
2. Verify that body response for Not unique email is received as shown below:
- Status Code: 409 Conflict
- Responsed body (example only):
{
    "error": {
        "message": "Email not unique"
    }
}
==== 4. How to resolve not Unique email problem automatically (Dynamic Variables - Postman has)
Prepare the request body as following:
{
  "email": "{{$randomExampleEmail}}", //<-- The variable generated via Postman (only unique emails are reqauired)
  "firstname": "{{$randomFirstName}}", //<-- The variable generated via Postman
  "lastname": "{{$randomLastName}}", //<-- The variable generated via Postman
  "password": "{{$randomPassword}}", //<-- The variable generated via Postman
  "avatar": "{{$randomAvatarImage}}" //<-- The variable generated via Postman (!!! Not usable - bug in Postman)
}
Now every data is created dynamically via Postman when we send the request
==== 5. Article Creation added
Method: POST
Endpoint: "https://olive-nasal-game.glitch.me/api/:resource"
Endpoint Final: "https://olive-nasal-game.glitch.me/api/articles"
Request Body:
{
    "user_id": 4, //<-- fixed at present
    "title": "{{$randomWords}}",
    "body": "{{$randomLoremText}}",
    "date": "{{$isoTimestamp}}",
    "image": "https://cdn.pixabay.com/photo/2023/11/30/01/38/vietnam-8420600_640.jpg"
}
*/