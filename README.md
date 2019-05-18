# Constructor-Word-Guess-Hangman
- node application that utilizes CLI of constructor function that enables userinput to be recorded. Similar to Week2 HangMan Activities.
*******************************************************************************
## About The Application:
- The application is based on League of Legends Champions! Test out your knowledge and guess which Characters you're being tested on.
- The Word Guess Constructor is a command-line application that can be run in the terminal. 
- It is node.js based that has interactive prompts on the command-line. 
*******************************************************************************
## How to use and began the application
- Open up the terminal such as Git and navigate straight into the folder that contains the file index.js file.
- Make sure to install the needed NPM Packages for program to run properly.
- Run the command **node index.js** for the application to begin.
*******************************************************************************
## Files Within Application
**letter.js**
- contains a constructor named Letter that display the blank placeholder based on the user input guess of the correct letter. 
**word.js**
- contains a constructor named Word that depends on the Letter constructor. It is used to create an object that portrays the current word that the user is trying to guess.
**index.js**
- the main file that initialize the application. It replies on **word.js** to randomly select the word and used the Word constructor to store it and also prompt user for each guess while keeping track of the correct letters guessed.
- **letter.js** shouldn't need any other files
- **word.js** requires **letter.js**
*******************************************************************************
## All Technologies Used

- Javascript 

- Node.js

### Node NPM Packages: 
- Inquirer
- Prompt 

### Terminal: 
- Git 

### Source Code Editor
- Visual Studio Code

### Flow Control: 
- Github
