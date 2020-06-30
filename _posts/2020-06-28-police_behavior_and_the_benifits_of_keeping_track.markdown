---
layout: post
title:      "Keeping Track of What's Important in 2020"
date:       2020-06-28 18:43:29 -0400
permalink:  police_behavior_and_the_benifits_of_keeping_track
---


Time again for a portfolio project. This time my job was build a Sinatra MVC Application, using ActiveRecord. I told myself that I would approach my project differently than I did with the CLI project. This time, I was prepared! This time, I was confident! This time, it would be usefule and relevent? 


If you're anything like me, you grabbed champagne last december, and when the clock struck twelve that beautiful night in December, you told yourself that this is year was going to be special. This year would mean something. This year, *this year would be MY year* 

Then 2020 actually happened. And it came hard.

Fires in Australia, the death of Kobe and his daughter, and oh yeah, a global pandemic.
What I want to focus on is what has been happening since May. Peaceful protests, violent riots, and spontaneous looting have erupted across the United States in the name of George Floyd, a black man who died following an altercation with the police. Many engaging in these both lawful and unlawful protests do so to stand against police brutality and to stand with the Black Lives Matter movement.

Racial disparity in the use of lethal force by law enforcement has been a recurring point of contention for the United States. And that is why I wanted to build a police behavior tracker.

The plan was fairly simple, users will sign up or log in, and from there they will be able to record an incident or make changed to previous incidents they added to the database

Here is the file structure for the models, views and controllers: 

<a href="https://imgur.com/evcDX7o"><img src="https://i.imgur.com/evcDX7o.png" title="source: imgur.com" /></a>

Controllers: I have an incident controller, a user controller and a application controller. Both user and incident controllers inherit from application controller.

Models: I decided to have a user and incident model, where the user has_many incidents and the incidents belongs_to the user.

Views: I knew that I needed to have an initial landing page, where a user or future user would go when they are not logged in (index.erb). I also created layout.erb template, to avoid copying over basic HTML on every .erb file. There would have to be views for the incidents as well, where you could see all listend incidents, where you could see single incidents, where you could create a new incident, and where you could edit previously created incidents.- viewing, creating, and editing. For users, I would need a sign up page and a login page.


I tested out this application in the browser with the help of a gem called Shotgun, which allows you to refresh a page to see changes, no need to restart the local server.

<a href="https://imgur.com/5PibrpK"><img src="https://i.imgur.com/5PibrpK.png" title="source: imgur.com" /></a>

An amazing thing I had learned while doing this assignment was using erb to set up certain html elements. I spent a bit of time brushing up on html forms & all the cool things that you can do with them. I ended up using drop-down menus, for all the input fields in the incidents form which lead to a cleaner look, and figured out how to create columns so the forms weren't so overwhelming

I opted this time to concentrate on functionality and a cleaner look, by choosing to write in HTML, a little bit of CSS and adding an image of movie tickets.
Overall this project was a fabulous learning experience for me. I have become more confident with creating a Sinatra App from the ground up. Looking forward to share with you the next chapter in my journey of becoming a Full Stack Web Developer which will be Ruby on Rails
