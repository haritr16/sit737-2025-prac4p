Steps to Build Microservice
1.	Install Node.js and create package.json
  •	Installed Node.js and created a new project directory
  •	Initialize a Node.js project by using the npm init -y command
2.	Install Required Dependencies
  •	Install Express for building the web server by using the command npm install express.
  •	Install Winston for logging: npm install winston.
3.	Develop the Microservice
  •	Created a new calc.js file.
  •	Import required modules (express, fs, and Winston).
4.	Implement the Arithmetic Functions
  •	Create Add function -> to add two numbers.
  •	Create subtract function -> to subtract two numbers.
  •	Create the Multiply function -> to multiply two numbers.
  •	Create Divide function -> to divide two numbers.
5.	Define API endpoints
  •	Define an API endpoint (/add) to handle addition requests.
  •	Define an API endpoint (/subtract) to handle subtraction requests.
  •	Define an API endpoint (/multiply) to handle multiply requests.
  •	Define an API endpoint (/divide) to handle division requests.
6.	Handle API Requests 
  •	Extract query parameters from requests.
  •	Validate inputs to ensure they are numbers.
  •	Perform the arithmetic operation and send the result in JSON format.
7.	Error Handling
  •	Validate inputs and log an error if they are not numbers
  •	Handle errors and log them in the error.log file
8.	Logging Using Winston
  •	Configure Winston to log errors and information to files (error.log and combined.log).
  •	Log error messages in the error.log file
  •	Log the information in the combined.log file
9.	Start the Server
  •	Define the port 3040.
  •	Use app.listen() to start the server and listen for requests.
  •	Log a message confirming the server is running.
10.	Test the Microservice
  •	Start the server by running node calc.js.
  •	Test the /add endpoint using a browser. Check log files (error.log and combined.log) to verify logging.
11.	Push Code to Repository
  •	Initialize a Git repository (git init).
  •	Add and commit files using the commands - git add . & git commit -m "Initial commit".
  •	Push to a GitHub repository.
