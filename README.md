# url-shortener

Link to live website: https://urlcutt.herokuapp.com/

1. How to use:
- Copy an url you want to shorten.
- Paste it to the input field.
- Hit the button to get your link shorten.
- You will see the number of clicks go up when you refresh the page.

2. Design decisions, brief description on the solution
- When I first saw the idea about this task, I choose MongoDB for the database immediately because it is a NoSQL database and
the setup time of MongoDB is very fast and easy to approach. And for the backend, I choose Express.js(Node.js) because that
the first thing I learn when I started working with backend. It has enough feature for me to finish the task. Because I
think this task is focus more about the backend with database design and API so the frontend is just a simple HTML(styled
with Bootstrap) and a JavaScript file to connect to the backend.
- First I have to think about the model of the database. For this task, I need to store the original url, the shortened
url, the hash code of the shortened url and then the click count. Only click count has the type number, the rest are string.
- I had created 2 route functions, the first one is "shortUrlRoute" and "getShortenUrlRoute". The first one was created to 
validate if the url is correct or not, then it will add the url to the database and also create a code which indicate the url
and save or if the original url is present in the database it will return its shorten url and the number of access in the 
database. The other route is create to redirect the users to their original url.

3. Setup of the application
- First of all, I installed all the dependencies and dev dependency: mongoose, express, cors, shortid, config, valid-url, 
nodemon.
- Then I create the config folder to store the link to the MongoDB cluster and setup the basic of the server on port 3000. 
Then I let the server run.
- Next up, I create the model for the database.
- Now the more trickier part is create the API which execute the logic to create the route. 
- After a long power typing and staring at the code, all the backend is ready and I test run it with Postman. It helps me 
send the request without the frontend. 
- Then for the frontend part, I choose to just go simple with everything. 

*Note: the PHP file in the frontend folder is for tricking the heroku so I can deploy the frontend part to heroku. 
