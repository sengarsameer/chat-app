# chat-app

## How to install the project and run locally
* Go to on your terminal/cmd.
* Clone the repo by this: https://github.com/sengarsameer/chat-app.git
* Installing package by command 'npm install'
* Run this project : 'npm run dev'
* Go to your browser and hit http://localhost:3000/ in url.
* Follow the instruction step by step.
  * NOTE: Make sure your mongodb server should be running on : mongodb://127.0.0.1:27017/

## File Details:
* /public
  * /css : All the styling and alignment fix by css code
  * /js : connect server using web sockets and chat's functions
  * chat.html : chat box fontend
  * index.html : landing page frontend (signup & login)

* /src
  * /db : create a connection with database
  * /models : base class for data models
  * /routers : all the backend apis e.g. login, signup
  * /utils : utility folder for sockets

* index.js : server file and socket's business logic