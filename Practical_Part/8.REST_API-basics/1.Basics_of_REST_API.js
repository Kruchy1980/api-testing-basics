// THIS PART IS DEDICATED TO STANDARDS FOR REST API - Basics
/* URL needed for this part: "https://naukaapi.testoneo.com/5/" 
This part is only explanation how to see difference between Reuest to API and not to API
Other URL's needed for this part
1. URL_1: https://naukaapi.testoneo.com/api/users/
2. URL_2: https://naukaapi.testoneo.com/api/logo/
3. URL_3: https://naukaapi.testoneo.com/api/lessons/5/
========== Example of Rest API Resources
URL_1 - list of users
URL_2 - media resource - logo
URL_3 - lesson resource - title
=========== REST API Resources Operations
In General for Operation on the resources are the basic operations in named as CRUD (named as Standard of modification resources):
C: Create (Methods: POST, PUT)
R: Read (Methods: GET, POST)
U: Update (Methods: POST, PUT, PATCH)
D: Delete (Method: DELETE)
======= Method POST
URL needed here: "https://naukaapi.testoneo.com/7/"
Add comment and click submit with opened DevTools on Network tab
Verify:
1. New request? - "https://naukaapi.testoneo.com/api/comments/"
2. Method of the request? - POST
3. Content of the request? - letymy
4. Status of the response? - 201 Created
5. Content of response? - {"message":"Thanks for comment"} --> Response
                        - message: "Thanks for comment" --> Preview
*/