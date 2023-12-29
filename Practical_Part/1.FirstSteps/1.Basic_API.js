// THIS PART IS DEDICATED FOR BASICS OF GUI (GRAPHICAL USER INTERFACE - WHICH IS SHORTENED UI (USER INTERFACE)) WITH API
/* What the API Exactly is API?
API is a (Application Programming Interface) where:
A (Application) - All applications which are created for any purpose realization where the acces is realized by the code help
P (Programming) - The Programistic access to the specific application/s
I (Interface) - Those are all plugins/elements which allows communication between systems which the Application is based on
===================================
The URL's Needed for this lesson
URL_1: "https://naukaapi.testoneo.com/6/"
URL_2: "https://naukaapi.testoneo.com/6/"
====================================== Couple Information about basics Of Network tab in Dev Tools
1. To Open Dev Tools use F12 (fn+F12) or RMB (Right Mouse Button) click and from expandedn menu choose (inspect/inspect element - dependable of web Browser which is used)
2. In the Dev Tools to see API go to Network tab and Refresh the page
3. In the Dev Tools on the Network tab click in gear and select the "Big request rows" checkbox to see  displayed API's endpoints which are used to display present GUI.
4. Main Tabs in Network:
- Headers - the part of the Request Endpoins and methods used to receive proper informations
- Payload - The part which contain the proper Request for the API Endpoint
- Preview - Shows main elemnts of page which is received by the API (CAn be HTML/JS/JSON/Code etc).
- Response - displays the response received from specific Request
- Initiator - ?? For later explanation
- Timing - That Tab is showing the trimes of servers for response for specific elements are loaded/received from the Back-end
!!!! If we can not see Payload tab then by clicking twice in the specific API requests it opens new page which shows Response of API which is sent to the server to receive specific information
=======================================================
!!! Other way to receive the same result:
1. Open File explorer
2. In the Address type command: "cmd" which opens command prompt in our system - other possibilities of opening command prompt are allowed.
3. Copy to bufor the URL of the opened Response (example: "https://naukaapi.testoneo.com/api/users/")
4. In the Command prompt type:
CLI command: curl <URL Address>
Cli command eample: curl https://naukaapi.testoneo.com/api/users/
The command "curl" sends request to API and we should receive the same result as shown below:
[{"id":1,"name":"Adam Nowak"},{"id":2,"name":"Anna Kowalska"},{"id":3,"name":"Jan Kowalski"},{"id":4,"name":"Joanna Nowak"},{"id":5,"name":"Jan Nowak"}]
As we can see it iw the same result which we get in Preview tab in our WebBrowsers Developer Tools (Dev Tools)
*/ 
