// THIS FILE IS DEDICATED TO BASIC AUTHORIZATION AN HEADER INSPECTION IN CHROME AND POSTMAN
/* Example
========== CHROME
In GUI update comment for article and in response open Request Headers.
Pay attention on:
1. Authorization: Basic VGV2aW4uRmFycmVsbDUxQGV4YW1wbGUuY29tOmluY3ViYXRlIHZlcnRpY2FsIG5ldHdvcmtz
2. Go under URL: https://decodebase64.com/ <-- Decoder base64 online for free
== RESULT:
Tevin.Farrell51@example.com:incubate vertical networks
As we can see decoded authorization includes Email address and Password of the specific user !!!!!  Security BAAAAD
=========== POSTMAN
1. Prepare and exeute method for comment
Method: POST
Endpoint: {{api_url}}/:resource
=== Headers part:
1. Add Authorization key
2. To the key add value from Headers from Chrome for the specific person ex
    "id": 1, <-- Id is needed for user id
    "email": "Moses.Armstrong@Feest.ca", <-- Email address is needed
    "firstname": "Moses",
    "lastname": "Armstrong",
    "password": "0Lelia39", <-- Password is needed
Final Results of Headers and Authorization tab not used is as following:
Headers (add keyword) Authorization: Basic TW9zZXMuQXJtc3Ryb25nQEZlZXN0LmNhOjBMZWxpYTM5
==== Authorization tab
Choose Basic Auth and add proper Credentials:
Username: Moses.Armstrong@Feest.ca
Password: 0Lelia39 <-- To avoid the open string use the variable prepared for that field:
Pre-request Script:
const mosiPass = "0Lelia39";
// Add it to local variable
pm.variables.set('myPass', mosiPass);
===== Final result of Authorization tab:
1. Basic Auth
2. Username: Moses.Armstrong@Feest.ca
3. Password: {{myPass}}

##### To Do:
1. Automatically creation for user credentials and use them in Base Auth
2. Prepare the methods:
    - Get all comments comment
    - Get single comment
    - PUT update comment
    - PUT create comment
    - POST new Comment - Is done - add random user credentials
    - PATCH single comment - automate Auythorization
    - DELETE comment
================ JWT_Authorization (For Service) - (JWT - Jason Web Token) =======================
URL of SWAGGER used for this part: "https://olive-nasal-game.glitch.me/tools/swagger-v2.html"
### Steps:
1. New server adress
2. Post/ register execution
3. Copy Token
4. Verification of Token under URL: "https://jwt.io" (Restrictions):
    * !!! Do not use it out of the course
    * Pay attention of validation time
============= Token usage:
1. Log in to SWAGGER
2. Get All Plugins
3. Verify results in Chrome DevTools:
    * Header: Authorization: Barer[token]
========================== Exercises:
1. Open SWAGGER on Swagger(JWT)
2. Expand first method :POST/register
3. As body use Credentials of not real users eg:
email: "Buddy_Emmerich11@example.org"
password: "0iWpVbU9nS91b7l"
-- Final Body Example:
{
  "email": "Buddy_Emmerich11@example.org",
  "password": "0iWpVbU9nS91b7l"
}
=== RESULT:
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkJ1ZGR5X0VtbWVyaWNoMTFAZXhhbXBsZS5vcmciLCJwYXNzd29yZCI6IjBpV3BWYlU5blM5MWI3bCIsImlhdCI6MTcwNDYzMTc2MywiZXhwIjoxNzA0NjM1MzYzfQ.yObynqWfherd9dp1LKEqkHcL5w-bkY_NisKSEEpYBFI"
}
2. Copy the key only: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkJ1ZGR5X0VtbWVyaWNoMTFAZXhhbXBsZS5vcmciLCJwYXNzd29yZCI6IjBpV3BWYlU5blM5MWI3bCIsImlhdCI6MTcwNDYzMTc2MywiZXhwIjoxNzA0NjM1MzYzfQ.yObynqWfherd9dp1LKEqkHcL5w-bkY_NisKSEEpYBFI
3. Use the key in Swagger in GET/plugin request
4. Press the lock icon
5. Paste our key and press Authorize
6. Close the popup
======== Decode the token !!!! use only for course purpose never on production
1. Go under URL: "https://jwt.io"
2. Paste our code
3. Verify the displayed Data
### !!!! Pay attention that our token includes 3 parts separate by '.':
1. eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 --> describersd ALGOITHM (used) and TOKEN TYPE
{
  "alg": "HS256",  <-- Algorithm used for encoding token
  "typ": "JWT" <-- Type of Token
}
2. eyJlbWFpbCI6IkJ1ZGR5X0VtbWVyaWNoMTFAZXhhbXBsZS5vcmciLCJwYXNzd29yZCI6IjBpV3BWYlU5blM5MWI3bCIsImlhdCI6MTcwNDYzMTc2MywiZXhwIjoxNzA0NjM1MzYzfQ <-- Payload sent by API
{
  "email": "Buddy_Emmerich11@example.org", <-- User Email (!!!! Newraulic data)
  "password": "0iWpVbU9nS91b7l", <-- user password (!!!! Very dangerous data if not encoded before display)
  "iat": 1704631763, <-- when the token was created
  "exp": 1704635363 <-- What is the token expiration time
}
!!! To verify the times go under URL:  "https://epochconverter.com" and paste the times
3. yObynqWfherd9dp1LKEqkHcL5w-bkY_NisKSEEpYBFI <-- Signature verification
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  your-256-bit-secret
) secret base64 encoded
// =============== Creating CRUD for Admin Resources
===== 1. Creation of random user Token
All in postman collection added - no time for copy paste here - To be done later

*/

