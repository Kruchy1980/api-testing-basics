// THIS FILE IS DEDICATED FOR PRACTICAL USAGE RESOURCE CREATION AND REQUEST PARAMETRIZATION
/* 
===== 1. GET for singular user using path variables
Method: GET
Endpoint: "https://olive-nasal-game.glitch.me/api/users/id"
Final Endpoint: "https://olive-nasal-game.glitch.me/api/:resource/:id"
=== STEPS:
1. Create Endpoint based of SWAGGER
2. Parametrize the Endpoint
3. Set the method GET for Request
4. Send the request to verify proper behaviour
5. Save the request
==== 2. GET specific Paframeter using Query Parameters with Automaticly Status Code verification
Method: GET
Endpoint: "https://olive-nasal-game.glitch.me/api/articles?id=3"
Final Endpoint: "https://olive-nasal-game.glitch.me/api/:resource/?id=3"
1. Create Endpoint based of SWAGGER
2. Parametrize the Endpoint
3. Set the method GET for Request
4. Send the request to verify proper behaviour
5. Open Pre-requestScript tab - to clean Console add the piece of code:
consle.clear();
6. In Test tab add a piece of code which verifies wehther proper status code is correct - 
pm.test('Status Coode is 200', ()=> {
    pm.response.to.have.status(200);
});
7. Save the request and DE-VoLai

*/
