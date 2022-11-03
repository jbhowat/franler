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

1103 - Alright, I can now create a user in my database using Postman to call to the server. Next I will try to capture the same data in a form and pass it into the db.

1138 - YUSSSS! The front end sign up form is now passing information into the database.

1230 - Feeling super frustrated and thinking I am not making any progress at this point. I took a long walk and a break from thinking about coding. 

1430 - Back from a nice break, walk, lunch, watching some mindless TV to get my mind clear and stop being frustrated withh having to downscale the scope. Still feeling a little disappointed that time is getting short and so I have scaled back the scope of the project. My goal now is just to get an even more minimal MVP. That means I will spend the rest of tonight trying to get a way to add options to a poll and then having the polls display and hopefully tally votes. No users or anything like that. I'd like to extend the project and make it so that polls are private but I think at this point that just isn't going to happen.

1625 - After working some more and a break for Senior Reinforcement Project Presentations, I now have the ability to generate poll documents using Postman. Next goal is to try to get the same functionality through the front end. Feels like Deja Vu, hopefully I won't hit the same roadblocks with it as I did this AM / I will now know how to overcome them.

1708 - Successfully creating new polls in the DB using a basic front end form. Figured out how to reset the state on the forms so that they clear when you hit create. Next I will try to make a component under the create poll component in order to show each poll.

1945 - Working on dynamically displaying cards, which will eventually have poll information. Did a little bit of css styling as well, some to help me visualize, and some to make it just not quite as uggo. 

2208 - More styling in line with the color of my logo. Polls are showing up, but only on a reload. Heading to bed...

## Dev Log - Day 3

0800 - I began work, mostly on styling, colors, getting the logo to appear in the corner of the site, as well as some light and mostly tasteful animations. It is still sort of bare-bones looking but ehh. Design is not my thing for sure. 

1107 - Satisfied with the basic styling, I am going to start to work on my stretch goals, which include: A header/footer to make it look like a real website, getting state to update the cards automatically when a new poll is submitted, a way to delete a poll from the front end, a way to vote on the front end and have that passed to the back end. I doubt I will get to many of thses but I know I won't get to my original stretch goals of user login functionality. 
