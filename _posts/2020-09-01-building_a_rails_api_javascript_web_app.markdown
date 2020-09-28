---
layout: post
title:      "Building a Rails API javaScript Web App"
date:       2020-09-01 15:36:49 +0000
permalink:  building_a_rails_api_javascript_web_app
---


In this project, I created a single page app, and the majority of user interaction is handled with JavaScript. I decided to make an app where people could play word association games using flashcard style content as a way to help with speech therapies.

This involved using Rails as a back-end API, which wasn't too difficult; adding "--api" to the end of the "rails new" command did most of the work. It didn't involve complex SQL table relations, and rendered JSON data instead of an html file. Then I used JavaScript to pull that JSON data & render it on the page, and this involved numerous challenges.

The first of which was utilizing object orientation. This project involved working with a series of objects from the back-end, so I created an empty object in JavaScript to hold this collection of objects from the Ruby back-end. While fetching the master list of flashcards from the back-end, I assigned the key of the JavaScript object equal to the index of the Ruby object, and set a new class instance as its value. This allowed me to iterate through the values of this JavaScript object when I rendered the flashcards information to the page. I decided to use an event listener for when the page was done loading to fetch & render the flashcard data.

My app is, in its essence, a simple one. Users can create and delete flashcards freely. The functionality of the app is there, but visually the app is dull. I will update this post as I change this particular feature.

As I write this, I can say that working through this project really increased my understanding of JavaScript and how it executes functions, that where you put code has an exponential effect on other processes. While I know this isn't exclusive to JS, I don't think I've encountered it nearly as much as during this project.
