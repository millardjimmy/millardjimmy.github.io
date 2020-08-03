---
layout: post
title:      "Nesting forms"
date:       2020-08-03 18:03:40 -0400
permalink:  nesting_forms
---



'Nesting?" you might ask, what am I even talking about?
Nesting is a routing mechanism that is available to us in Ruby on Rails. Nested resources are a powerful tool and Rails has made it easy to deal with doing this directly in your usual form..form. If I through you with 'resources', allow me to explain. When using generators to create a scaffolding of your application, the 'resources' syntac is a useful way to have Rails generate each the CRUD routes for you. Take a look below:

![rails g resource](https://imgur.com/QaVJs4J.jpg)

this is my config/routes.rb file, here you can see I've used the 'resources' keyword to draw routes for my 'Post' model. Now, when I run 'rake routes' in terminal, I'll see the following routes:

![resource routing](https://imgur.com/4oweZKq.jpg width:"25%")

these were generated with one terminal command!

Now that you have a baseline for what I'm talking about, lets focus on forms.
A typical Rails form is made using the `form_for` tag. When dealing with a normal form, you would just pass in your controller object and add in the relevant input fields.

Let's go back to the post example above. Say you want to make a post that just needs a title and content, that would look as follows;<br>

`<%= form_for @post do |f| %>`<br>
  `<%= f.label :title %>`<br>
  `<%= f.text_field :title %>`<br>
 `<%= f.label :content %>`<br>
 `<%= f.text_area :content %>`<br>
`<% end %>`<br><br>

For a basic form this might do the job, but what if you know you want to create other things at the same time? It’s not always reasonable to force someone to take multiple steps when one step will do.

Say we’re building a blog, let's also say you write a lot of posts, then you might want to sort posts with a tag!

This sounds like the perfect opportunity for nested forms. We know that a user would have many tags;

`has_many :tags`<br>
…and a tag belongs to a user;

`belongs_to :user`<br>

So, we want to add their tags and a link as an option into the form when they are updating their title and content, too. Our old form needs a nested form;

`<%= form_for @user do |form| %>`<br>
 ` <%= form.label :title %>`<br>
  `<%= form.text_field :title %>`<br>
  `<%= form.label :content %>`<br>
  `<%= form.text_area :content %>`<br><br>

  `<%= form.fields_for :tags do |tags_form| %>`<br>
   ` <%= talks_form.label :tag %>`<br>
    `<%= talks_form.text_field :tag %>`<br>
    `<%= talks_form.label :link %>`<br>
    `<%= talks_form.text_field :link %>`<br>
  `<% end %>`<br>
`<% end %>`<br>

It’s important to remember that the form needs a new name. You might notice that our original form was named `|form|` but out new form is called `|tags_form|`.

We’re not out of the woods just yet. We still need to update a couple of things;

With a nested form like this, we need to build the object that will be used - much in the same way we do for a #new action (eg; @tag = Tag.new)

To do this in UserController, we would update the #edit action to:

`def edit`<br>
 ` @user.talks.build`<br>
`end`<br>

Without this, our talk fields would not be displayed correctly in the form.

Additionally, we need to greenlight these params. Otherwise they will be ignored by our controller. We do this by defining `user_params`;

`def user_params`<br>
  `params.fetch(:user, {}).permit \`<br>
    `:name, :bio,`<br>
    `talks_attributes: [:id, :title, :link, :user_id]`<br>
`end`<br>

Now, the params passed through from the form are being permitted and will be used to create the relevant records in our database. Note how we’ve included id and user_id in our tags_attributes!

Lastly, we need to add accepts_nested_attributes_for :tags to our User model to enable the attribute writer for the nested attributes.

With these records saved, we’re free to use a user’s tags to display anywhere we like in the usual manner. We might want to list all tags on the sidebar of their profile, which we can access with @user.talks thanks to our earlier association.

Now, it’s also possible to handle nested resources, not just using nested forms. A nested resource would still use it’s own controller to performs it’s actions, but would also be available at a new route. The Rails Guides shows this in great detail.

In our User / Tag example, you might show all talks as a nested resource for users. In config/routes.rb, that would be written with a do/end;<br>

`resources :users do`<br>
  `resources :tags`<br>
`end`<br>

Does this look familiar? Remember, this would generate the CRUD routes for a user’s tags. They would still use the TagsController, but effectively pre-set the :user_id as a parameter. 

Nested forms and nested resources can get complicated. It’s important to think about their usage before going crazy. Before you know it, you might have a nested resource within another nested resource and, suddenly, you’re bogged down in a routing nightmare. 
If that happens, don't be afraid! Go for a walk, drink a cup of tea and come back to it with renewed vigor. You've got this!
