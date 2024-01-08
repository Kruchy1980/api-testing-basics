// THIS PART IS DEDICATED TO PRACTICAL EXERCISES
/* === Seeding Preparation
In the main collection:
1. Create E2E folder
2. Inside the created folder create folder with name Seed
3. Inside Seed folder create 2 requests
    1. Create new user TU1 and YTU2 the same with only one change in body TU1/TU2
        * body:
        {
            "email": "TU1_{{$randomExampleEmail}}.{{timestampMS}}", //<-- must be unique
            "firstname": "TU1 {{$randomFirstName}}",
            "lastname": "TU1{{$randomLastName}}",
            "password": "{{$randomPassword}}",
            "avatar": "https://cdn.pixabay.com/photo/2023/11/07/22/59/building-8373618_640.jpg" <-- Avatqar can be changed
        }
        * Tests tab:
        pm.test('should have status code 201', () => {
            pm.response.to.have.status(201);
        });
        // Create jsonData variable
        let jsonData = pm.response.json();
        let userTU1Id = jsonData.id;
        pm.collectionVariables.set('userId', userTU1Id);
        // Save Email as well
        let emailTU1Id = jsonData.email;
        pm.collectionVariables.set('userTU1Email', emailTU1Id);

============= STEPS After Seeding
1. In E2E folder create new folder with name Actions
2. In Actions folder create folder with name Step1 Users
3. Create request: Get all users With TU1 and TU2 and get single user
4. In Tests tab add code which verifies the users exists
============= Articles tests
1. In Actions Folder create Step2 folder
    - In the follder create Post Create Article for user TU1
    - PUT Create TA2 via update wit user TU2
        - store articleId in collection VAriables
    - GET all articles with TA1 and TA2
    - Get articles with (with Param user id TU1)
    - PATCH update aerticle TA1 title

*/