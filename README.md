# Eat Da Burger!
A Burger Eatin' Application With Node.js/Express/MySQL/Handlebars/Bootstrap

## Description

This application demonstrates a simple full stack application with a front end implemented with HTML/CSS and elements from the Bootstrap framework and the backend implemented with Node.js and Express. HTML templating is done with the help of Handlebars.

The user may enter any burger name to add it to the menu. This also adds the new burger entry into the MySQL database. The initial burger entry is added as *to be devoured* on the menu and is placed in the middle of the screen. The user may then devour any burger by clicking on it, which moves it into the far right box and updates its status accordingly in the database.

## Demo

The demo of the burger eating application can be found [here](https://eat-da-burger-03022019.herokuapp.com/).

## Installation

To run the application locally, first clone this repository with the following command.

	git clone git@github.com:kpatel1209/eat-da-burger.git
	
Next, install the application dependencies.

	cd eat-da-burger
	npm install
	
Finally, run the node server locally.

	node server
	
Now, open the local application on port 3000 at the URL: `http://localhost:8080/`.