Spotify Remix
In this project let's build a Spotify Remix App by applying the concepts we have learned till now. This project allows you to practice the concepts and techniques learned till React Course and apply them in a concrete project.

You will demonstrate your skills by creating an app that will fetch data from an internal server using a class component, displaying that data, using component lifecycle methods, routing concepts, authentication, and authorization, and adding responsiveness to the website.

This is an individual assessment. All work must be your own. You will also be given feedback by code reviewers after your project submission.

Prerequisites
UI Prerequisites
Click to view
What is Figma?
Figma is a vector graphics editor and prototyping tool which is primarily web-based. You can check more info on the Website.
Create a Free account in Figma
Kindly follow the instructions as shown in this video to create a Free Figma account.
How to Check CSS in Figma?
Kindly follow the instructions as shown in this video to check CSS in the Figma screen.
Export Images in Figma screen
Kindly follow the instructions as shown in this video to export images from the Figma screen.
Check this reference docs to export images in Figma screen.
API Prerequisites
Click to view
Kindly follow this website for creating a spotify account and register your application.

Refer to the below image to check your CLIENT ID : - client id

Design Files
Click to view
You can check the Design Files for different devices here.
Set Up Instructions
Click to view
Download dependencies by running npm install
Start up the app using npm start
Completion Instructions
Functionality to be added
The app must have the following functionalities

Login Route
Users should be able to log in/logout to their account.
Users should be able to navigate to Profile/Home/YourMusic/Playlists routes using links in the sidebar.
When the data is being fetched then the Loading view should be displayed to the user.
Profile Route
Users should be able to see profile photo, name, and followers' details.
Users should be able to see the logout button.
Users should be able to see PROFILE highlighted in the sidebar.
Home Route
Sidebar should contain the application title with logo, Profile, Home, Your Music, and Playlists button
Users should be able to navigate to the profile route when clicking on the Spotify Remix logo.
Users should be able to see a list of Featured Playlists (Ex: Editor Picks) based on the user country and name.
Users should be able to see the list of Categories (Ex: Genres and Moods).
Users should be able to see the list of New Releases based on the user country.
Users should be able to see HOME highlighted in the sidebar.
Specific Playlist Details Route :
When a user clicks on any playlist in the list of featured playlists then the user should be able to see the list of songs in that playlist.
Users should be able the see the following details(Song Name, Artist Name, Duration of the song)
Users should be able to play the song
Specific Category Playlists Details Route :
When a user clicks on any category in the list of categories then the user should be able to see the list of playlists in that category.
Users should be able to see the thumbnail and name of the playlist.
Specific Album Details Route :
When a user clicks on any Album in the list of New Releases then the user should be able to see that Album.
Users should be able to see the thumbnail and name of the Album.
Users should be able to see the song in that Album
Users should be able to play the song.
Your Music Route
Users should be able to see the list of liked songs.
Users should be able to play the songs.
Users should be able to see Your Music highlighted in the sidebar.
Playlists Route
Users should be able to see the list of your playlists (thumbnail, playlist name, number of tracks).
When a user clicks on any playlist in the list of your playlists then the users should be able to see the list of songs in that playlist.
Users should be able to see Playlists highlighted in the sidebar.
When the users enter an invalid route in the URL then the Page not found Route should be displayed.
Quick Tips
Click to view
You can use Moment third party library to format the date
Moment Documentation
You can use HTML Audio tags for building the Music Player
You can see this Documentation for stylings
Important Note:
Click to view
When you want to showcase your application, you need to give access to users.
To give access to users, follow these steps mentioned below

Open your app in the dashboard - Dashboard Link

Click the USERS AND ACCESS button

users and access
In the USERS AND ACCESS page, click the ADD NEW USER button to add a user to your application.
add new user
After clicking the ADD NEW USER button, a pop-up will be opened. In that pop-up, give the user details like name and email. Make sure you are providing the appropriate email.
pop up new user
Fill the details and save them, the user details will appear in the USERS AND ACCESS You can add a maximum of 25 users in development mode.
user details
Before deploying your project, change the redirect URL accordingly in getRedirectURL function from the path src/components/LoginForm/index.js which return when the condition is false

Resources
Data fetch URLs
Stretch Goals
If you complete the main features of the project you can try out the below features as well.

Note: Just a reminder the additional functionality is just extra practice using the tools we have learned. These are not required. If you do not reach the stretch goals, don't worry.

Additional Functionality to be added
Project Submission Instructions
For Mini Projects, you no need to submit the code using ccbp submit RJSCP2G83E, Though you submit the test cases may or may not succeed and you can ignore the result, Test cases will be added soon.

For Mini Projects, you need to only publish/deploy the code using ccbp publish RJSCP2G83E domain_name.ccbp.tech. So that our team will be able to see that code and deployed URL( Ex: something.ccbp.tech) and will share feedback to you if required.

Things to Keep in Mind
All components you implement should go in the src/components directory.
Do not remove the pre-filled code
Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
Instructions
Complete the below steps to create your development environment and start working on some amazing projects!
Step - 1 : Setting up IDE (one time process)
Follow these instructionsClick Here
If you have already finished step-1 before, skip this and continue directly to step-2
Step - 2 : Setting up a Workspace to solve the question
Run the below command in your IDE to setup a workspace for the given question
ccbp start RJSCP2G83E
Step - 3 : Submit the question after solving it
Run the below command in your IDE to submit the question for grading after solving it completely
ccbp submit RJSCP2G83E
