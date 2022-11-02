<div align="center">
  <img src="https://raw.githubusercontent.com/jbhowat/franler/main/franler/assets/logo-color.png" alt="FRANLER" style="width:400px;"/>
</div>

---

# What is FRANLER?
Franler is a way for groups of friends to collaborate and decide on plans!

---
## What does the name Franler mean? Kind of a weird name....
Franler is a portmanteau which stands for "Friends Ranked Poll Planner." *...and the developer is kind of a weird guy*

---

## Initial Project Brief

<div align="center">
  <img src="https://raw.githubusercontent.com/jbhowat/franler/main/franler/assets/FRANLER%20-%20Initial%20Project%20Brief.png" alt="project brief table" style="width:400px;"/>
</div>

---

## Dev Log - Day 1

0700 - Project begins. I started by setting up webpack, git, this readme, and an initial file structure. Went to logo.com to get a free basic set of logos for the project. I'm pretty pleased with the outcome. Ran into some issues with configuring webpack for .jsx files and making it all work but figured it out.

0930 - Wrote and submitted project brief. Included a screenshot of the initial brief in the readme file for posterity.  

1115 - I've gotten everything setup for the server side now (node/express) and the client side (react) as far as the absolute minimum basics. The front and back end are talking to each other. Did a little work on the readme file just to try to make this documentation as nice as possible as I go. Lunch / errand break. 

1458 - Spun up mongoDB server on Atlas Cloud service. Installed mongoose and linked backend to the database. Added dummy data to the database using MongoDB Compass. Was able to retrieve that data and pass it all the way to the front end. The R in CRUD now works at its most basic level. C, U, and D are next.

1535 - Beginning to work on a structure for my React app using Excallidraw. Added signup component to evnetually Create new users. Added CSS Styling. Tech-Talk and dinner break.

1645 - Cleaned up a few bits of redudant code and bits that were just in place for testing, beginning to work on the ability to create a new user in the database.

1837 - After a bunch of work I've made a front end form that makes a POST request. Starting to work on routing that to the database and then I will probably call it quits for the night. 

## Dev Log - Day 2

0700 - Started working on where I got stuck last night, trying to pass something, anything, front front-end to the server. Spent a lot of time on this and was alternating between CORS errors and 400's and ultimately I think it came down to having my data parsed the right way and telling the server what format it would be in. 

0947 - With the previous block now overcome, I'm going to continue with trying to send data from the front end and getting it onto the server. 
