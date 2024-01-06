// THIS FILE CONTAINS EXERCISES OF DELETING OBJECT USING API
/* ======= 1. reusable Delete for User/Article
1. Add new folder in 1.Users/2.Articles
2. Name them Create and Delete User/Article
3. Paste to folders 2 requests
    - Reusable User/Article Creation
    - Reusable User/Article Deletion
4. Go to Test tab and create such a code:
====== For Users
1. Pre-request script
console.clear();
2. Test script
// Create jsonDAta variable
let jsonData = pm.response.json();
// Verify the result
// console.log(jsonData);
// Create id variable for created user
let createdUserId = jsonData.id;
// Verify whether the id is saved
// console.log('My new user id: ', createdUserId);
// Create postman collection variable
pm.collectionVariables.set('newUserId', createdUserId); //<-- Pay attention for Collection Variables usabe - the scope is for collection not for request only 
// Verify
// console.log('My new usert ID: ', pm.variables.get('newUserId'));
3. Go to Delete user request and use the variable in endpoint
Delete - Pre-request script
console.clear();
// Get the newUserId variable
let userForDeleteId = pm.collectionVariables.get('newUserId');
// Verify:
console.log('User for Deletion: ', userForDeleteId);
===== DELETE Method Endpoint
{{api_url}}/:resource/{{newUserId}} //<-- where :resource = users

======= For Articles
=============1. Creation Tests Script
// Create jsonDAta variable
let jsonData = pm.response.json();
// Verify the result
// console.log(jsonData);
// Create id variable for created user
let createdArticleId = jsonData.id;
// Verify whether the id is saved
console.log('My new article id Creation: ', createdArticleId);
// Create postman collection variable
pm.collectionVariables.set('newArticleId', createdArticleId);
// Verify
console.log('My new Article ID: ', pm.variables.get('newArticleId'));
// ==========================================
// DELETE 1. Pre-request Script
console.clear();
// Get the newUserId variable
let articleForDeleteId = pm.collectionVariables.get('newArticleId');
// Verify:
console.log('Article for Deletion - DELETE: ', articleForDeleteId);
======== 2. Endpoint
{{api_url}}/:resource/{{newArticleId}}
*/