// THIS PART IS DEDICATED TO EXPLAIN WHAT API EXACTLY IS
/* Use URL: "https://google.com"
1. When on the Page - open DevTools
2. Press Elements tab which displays th code of webPage (HTML/CSS)
3. The displayed code is a WebPage design
4. Thanks to API that data is displayed to the user by more user friendly way
========= Programistic communication API
We can say that Each system have plugins which are used by API to retrive specific data for what should be displayed.
========= Based on TV - the same API for each device allows us to use that API on different device:
1. Volume changing - via API/Pilot/TV itself
2. Channels changing - via API/Pilot/TV itself
========= API Based on Application
1. Plugins - each plugin uses API of Google Chrome WebBrowser what allows the plugin to be used via WenbBrowser
======= API in Console
1. Open google chrome
2. Open devTools
3. Switch to the Console tab
4. Type console. and choose log
5. Type (Final result) console.log('Hello World!') and press enter
-------- Batery status display in console
Method in Coonsole:
navigator.getBattery(); --> expand the displayed promise and expand PromiseResult where all information about our battery - dynamically updated is
-------- API Navigator some methods:
URL: "https://developer.mozilla.org/en-US/docs/Web/API/Navigator"
1. preffered language/s verification
- navigator.language; -->  verifies the preffered browser language
- navigator.languages --> displays the users preffered languages in the browser
2. wevdriver verification --> boolean
navigator.webdriver; --> verifies whether the webBrowser is controlled by automation (!! use also when automation tests will be executed)
3. userAgent verificagtion --> displays information about webbrowser supported in system
navigator.userAgent;
======= API Different Clients Communication accesibility
!!! Need to remember that not every API are being accessible (security reasons)
======= API Standards:
There are many standards of API examples below Popularity Dedscending:
1. Web API --> used for webBrowsers and servers
2. POSIX / Windows API - used for Operation System Communication
3. SOAP - used for big application
4. REST - light standard for usage in web application
5. GraphQL - very complexed request language for web application - (very complex structure)
======== !!! Do not mistake API with REST API
*/