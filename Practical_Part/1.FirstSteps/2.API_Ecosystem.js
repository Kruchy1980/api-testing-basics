// THIS PART IS DEDICATED TO ECOSYSTEM OF API - General information
/* Ecosystem API is all what can be described as:
- WebSites Communication:
    * Requests
    * Responses
- HTTP and REST API standards:
    * Responses Status Codes
    * Statuses of sent request:
        - 100 - 1xx - Information statuses
        - 200 - 2xx - Correct operation statuses
        - 300 - 3xx - Redirection Messages
        - 400 - 4xx - Client Servers Errors
        - 500 - 5xx - Servers Errors
    * Methods of HTTP:
        - kinds of requests:
            - GET
            - POST
            - PATCH
            - PUT
            - DELETE
            - HEAD
    * Rest API:
        - uses HTTP
        - is a standard of sources organization
        - stores available interactions with sources
- Front and Back End:
    * Front end is a WebSite presentation
    * Backe end stores the WebSite data
================== DESCTIPTION
A. Clientg Server Communication
1. Open URL: "https://naukaapi.testoneo.com/1/"
2. Open Dev Tools (F12)
3. Go to Network Tab
4. Refresh the WebPage
====== RESULT
1. Communication between server and webBrowser started - (Cliene server - host server):
- Client server sends Request to the host server --> Host server sends response back to client server
- Data connected to the WebSite returned - based on the HTTP Protocol
========== HTTP/s Protocol
URL_1: "https://naukaapi.testoneo.com/1/"
URL_2 (Error response): "https://naukaapi.testoneo.com/lol/"
- HTTP protocol - if there is https://  <-- means the protocol is secured
- Response code (can be found in Headers tab in Netrwork devTools)
- Checkbox "Disable cache" --> if checked than when the page is reloaded the sources are requested once more and they are not stored anymore
====== HTTP Methods
URL: "https://naukaapi.testoneo.com/7/"
- GET - is used to receive response only
- POST - is used to receive response with specific parameters swhich are displayed in payload tab of the speciric request
============== Resources Standarization
URL: "https://naukaapi.testoneo.com/6/"
API Differs from URL with the Endpoint - the specific information which receives specific information from different data storesof application --> Simply it orders (organizes) the resources which are received in response (needed later for displaying them to User)
EXAMPLE:
WEB URL: https://naukaapi.testoneo.com/6/
API URL (one of the resource only): "https://naukaapi.testoneo.com/api/users/" 
============ JSON Standards - key element of Rest API Standards
URL: "https://jsonformatter.org/" --> JSON data formater
All requests returns data in JSON format (JavaScritp Object Notation) - which makes the displayed data easier for developers
Basic JSON Format (example): {"title":"6. Dodatkowy front-end do API"}
Advbanced JSON Format (example): 
{"title":"6. Dodatkowy front-end do API", "subtitle":"2. Added manually" }
-- Array of objects:
[
  {
    "title": "6. Dodatkowy front-end do API",
    "subtitle": "2. Added manually"
  },
  {
    "title": "6.1 Dodatkowy front-end do API",
    "subtitle": "2.1 Added manually-1"
  },
  {
    "title": "6.2 Dodatkowy front-end do API",
    "subtitle": "2.2 Added manually-2"
  },
  {
    "title": "6.3 Dodatkowy front-end do API",
    "subtitle": "2.3 Added manually-3"
  }
]
========= SWAGGER Live-Documentation
URL: "https://naukaapi.testoneo.com/doc/" --> Fake API used for practice only

*/


