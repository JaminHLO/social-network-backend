# Social Network Backend

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Description
    
This Project is a social network backend that manages users and their thoughts and reactions to other users' thoughts. It is built with javascript with a NoSQL MongoDB backend. It uses the express, mongoose, dotenv, and dayjs libraries and operates from the CLI and Insomnia. 
    
## Installation

Users will need to install the npm libraries as defined in the included package.json file. Also please create a .env file including entries for the socialDB database as well as a DB_URI of 'mongodb://127.0.0.1:27017/' for local testing.
Set-Up CLI Commands from project root directory:
>npm i <br>

## Usage

A Demonstration Video showing the setup and functionality of the program is available here: <https://www.loom.com/share/a137544a78c043258a147e612f452f60> <br>
Otherwise, the program server is initialized in the project root directory with:
>npm run start<br>

Step 1. Within Insomnia GET and POST commands may be used from: <http://localhost:3001/api/users/> where 'users' could also be 'thoughts' to return a list of any stored users or thoughts respectively. <br>
Step 2. Insomnia commands PUT (update) or DELETE may be used on 'users' or 'thoughts' using the path <http://localhost:3001/api/users/123> where 'users' could also be 'thoughts' and '123' is a valid userId or thoughtId retrieved using GET in step 1. <br>
Step 3. Insomnia command POST may be used on 'thoughts' to add 'reactions' to the 'thought' of one of the 'users' using the path <http://localhost:3001/api/thoughts/123> where '123' is a valid <br>
Step 4. Insomnia command DELETE may be used on 'reactions' using the path <http://localhost:3001/api/thoughts/123/reactions/456> where '123' is a valid thoughtId and '456' is a valid reactionId both retrieved using GET in step 1.<br>
A walkthrough of these steps is shown in the demonstration video above.

## License

This Project is covered by the following license: GNU General Public License v3.0.

## Contributions

Instruction was provided by Instructor Saurav with assistance from TAs Andreas #1, Andreas #2, Constan, and Morgan. A special shoutout to Constan who help clarify a requirement for me.

Additionally, I used or reviewed portions of the code base provided to students in the activities - referencing some of the code or syntax for our assignment. My purpose was to further familiarize myself with the various ways to implement the required backend functionality.

Based on a valuable suggestion from Instructor Saurav. I also using dayjs to handle the getter function for formatting the createdOn dates. 

## Tests

The Project may tested using the installation instructions above and running 'npm run start'and then using Insomnia and/or MongoDBCompass to confirm and manipulate the status of the database. Please see the Demonstration Video above for a walkthrough.

## Questions

My GitHub username is JaminHLO and my repository is available here: <https://github.com/JaminHLO/>.
If you have any questions please contact me at <jamin.hogan@gmail.com>.
