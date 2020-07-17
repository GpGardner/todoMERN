![Site Image]
(https://ibb.co/r0dZDc9)

# MERN STACK TODO APP
Deployed to - http://todoreactmongo.herokuapp.com/

Hello, this a small app created to test my understading of 
* React
* Material-UI
* Hooks
* MongoDB
* Node.js
* Deployment with Heroku


### Components

This app features three small components
1.  #### TodoList - basically the container for the todos, and the form
    * Houses most of the logic via hooks
    * Makes the calls to recieve the todos from a DB
    * Pushes todo information into the TodoItems

2. #### TodoForm - Holds state for the forms, sends submission information back to todolist
    * One form and two inputs
    
3. #### TodoItem - This is the skeleton for each displayed todo
    * Also houses state for editing each indiviual todo
