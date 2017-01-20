Feature: Strarting the Application
	As a gamer
	I want to start the game
	To play with it

@startup
Scenario: Starting the application
	Given the url of the application
	When the application is loaded
	Then the game is presented to the gamer
