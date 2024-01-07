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

*/