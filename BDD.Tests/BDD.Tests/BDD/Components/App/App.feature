Feature: App Component
	As a gamer
	I want to interact with the game
	To play with it

@buttonActions
Scenario: Move to Left
	Given the url of the application
	When I press the Left button
	Then the user space ship moves to left direction
