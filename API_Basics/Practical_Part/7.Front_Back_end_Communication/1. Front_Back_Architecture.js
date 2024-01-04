// THIS PART IS DEDICATGED FOR FRONT AND BACK END COMMUNICATION VIA API
/* URL used for this part: "https://naukaapi.testoneo.com/2/"
======= Monolithic Architecture - Whole data is created on the servers side
1. Open Browser and DevTools (Preserve log - unchecked, Disable cache checked)
2. Switch to the Network tab
3. Paste the URL and press Enter
= RESULT
1. 2 API requests sent to backend
2. Whole displayed data in one file with the page (logo is not important)
============ Architecture division - example
URL used for that part: "https://naukaapi.testoneo.com/3/"
!!! Pay Attention for index.html - the frame which do not have all data passed as monolith but the script is requested
The script automatically asks for data from Database - file data.json - info abour users which are displayed on GUI
== WebSite Frame
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Nauka API 3</title>
    <link rel="icon" type="image/png" sizes="16x16" href="data:image/png;base64,
	R0lGODlhEAAQAHAAACH5BAEAAAUALAAAAAAQABAAggAAAFhYWMPDw/9/J//KGAAAAAAAAAAAAAM7
	WLpcES2qJ2QZY4YqMabLw3gY52wLSZ7mpX7o+JbRQMxETdzknss7m+/WwAx9GaAxmEzZmhYjNEq0MBIAOw==" />
</head>
<body>
   <a href="../">Powrót do głównej</a>
    <h3>3. Dynamicznie pobierane dane: lokalnie</h3>
    <ol id="root"></ol>
    <script src="script.js"></script> <== !!! Here the script.js is called
</body>
<footer>
    <a  href="https://jaktestowac.pl"  target="_blank" rel="noopener">
      <span><img src="/logo.png" style="max-width: 20px;"> jaktestowac.pl</span>
    </a>
</footer>
</html>
== script.js file content
file = "data.json" <== !!! Under this name data is recorded
const container = document.getElementById('root')

fetch(file)
  .then(response => response.json())
  .then( json =>
  json.forEach(user => {
      const li = document.createElement('li')
      li.textContent = user
      container.appendChild(li)
   }));
== data.json file content --> can be requested separately
[
    "Adam Nowak",
    "Anna Kowalska",
    "Jan Kowalski",
    "Joanna Nowak",
    "Jan Nowak"
  ]
!!! As we can see the users data displayed on GUI is stored under dynamically generated file (DB data retrive)
=============== API Architecture example
URL used for that part: "https://naukaapi.testoneo.com/4/"
1. Similarly as in the previous example with the difference that users are requested from separate resource under the URL: 
"https://naukaapi.testoneo.com/api/users/"
Here API is a response from the Front-end Server - basics
Users are requested from Backend server
========= Network monitoring
URL used for that part: "https://naukaapi.testoneo.com/4/"
1. Set the Network speed to Slow 3G in WebBrowser
!!! Look on the responses ordering
1. Monolith part - WebPage frame
2. Script which generates file with proper data response
3. The file with proper data response
======= Self Exercise - Idenrify elements from - requests to API
URL used for the exercise: "https://naukaapi.testoneo.com/5/"
Requests to API:
1. URL_1:  "https://naukaapi.testoneo.com/api/lessons/5/" - Title displayed on the page
2. URL_2:  "https://naukaapi.testoneo.com/api/users/" - Users displayed on the page
3. URL_3:  https://naukaapi.testoneo.com/api/logo/" - Logo displayed on the page

*/