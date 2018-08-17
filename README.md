This is Week 6 of Makers, and we are working on our first group project, lasting 5 days.

# MakersBnB

MakersBnB allows users to list properties and book properties that are listed.

## MVP

There are many avenues of detail we could go down on this project, so initially we decided on certain key points which we thought were the most important aspects to have a functioning application.

* Users can sign-up

Once logged in a user can...
* Other listings page
  * View all listings
* Own listings page
  * Add a listing

## Next iteration
* Signed-up users can log in

* Other listings page
  * Book a listing

* Own listings page
  * Can view their own listings
  * Get confirmation of a booking

## User Stories

MINIMUM VIABLE PRODUCT
```
[MVP] As a MakersBnB product manager,  
So that our website gets visibility,  
I want any user of the web to be able to see all listings (without needing to sign up).

[MVP] As a user listing a property,  
So that I can advertise my property,  
I want to post a listing via a web form.

[MVP] As a user listing a property,  
So that I can maximize my opportunities,  
I want to be able to post more than one listing.
```

STRETCH (These would be nice to have)
```

[Stretch] As a user listing a property,  
So that I can advertise my property,  
I want to give details and a photo of my property via a web form.

[Stretch] As a user renting a property,  
So that I can make an informed decision on my booking,  
I need to be able to look at details of an available listing.

[Stretch] As a user renting a property,  
So that I can book a listing,  
I expect to be able to book a listing.

[Stretch] As a MakersBnB product manager,  
So that multiple users can use the service,  
I want users to be able to sign up, sign in, and sign out.

[Stretch] As a MakersBnB product manager,  
So that I am better able to regulate the activity on our website,  
I need the user to sign in before they are able to book or post a listing.

[Stretch] As a user renting a property,  
So that I can inform other users of my experience,  
I would like to post a comment on a listing.

[Stretch] As a user renting a property,  
So that I can make an informed decision on my booking,  
I would like to read comments that other users have posted.

[Stretch] As a user listing a property,  
So I can review what I have posted,  
I need to be able to view my own listings.
```

ADVANCED (It is unlikely that we will get to working on these, but if we do have time, we will)
```
[Adv] As a user listing a property,  
So that I can check my schedule before accepting a new commitment,  
I want to see any new bookings on my listings and be able to confirm or decline.

[Adv] As a user renting a property,  
So that I am reassured that the poster of the listing has seen my booking,  
I expect to see confirmation or declination my booking.

[Adv] As a user listing a property,  
So that we avoid booking conflicts,  
I expect to be able to select available dates that my listing is available.

[Adv] As a user renting a property,  
So that I can compare the listings to my affordability and available dates,  
I want to filter for all listings available in my specified date range, along with their price per night.
```

## Charter

### It's okay to...

1. Diasgree
2. Ask questions
3. Offer feedback on other people's work
4. Not understand
5. Have breaks

### We will...

1. Start the day with a standup at 9:30
2. Finish the day with a retro
3. Be open to new ideas
4. Delegate work evenly
5. Use our time wisely

### We will not...

1. Be disrespectful to each other
2. Make changes to other people's work without reviewing it

## Goals and Progress

### Monday
Team Members Present: Marcus, Marek, Ed  
Goal: Create sign up page and connect a database, adding text based listings to.  
Achieved:  

### Tuesday
Team Members Present: Marcus, Marek, Ed, Cui Li, Olive  
Goal 1: Decide on what database and webdriver we will use.  
Goal 2: Be able to collaborate on GitHub on one repo.  
Goal 3: Create a database that is available on all devices.  
Goal 4: Work on MVP  
Stretch Goal: Have a completed MVP  

Achieved: Goal 1-4.  

### Wednesday
Team Members Present: Marcus, Marek, Ed, Cui Li, Olive  
Goal 1: Compile separate components of the code so we have a GitHub with a running MVP.  
Goal 2: Add description, location, price per night, and image to listing profile.  
Goal 3: Be able to book a listing and delete the listing from the database.  
Stretch Goal: User management - sign up, sign in, sign up.  

Achieved: Goal 1-3.  

### Thursday
Team Members Present: Marcus, Marek, Ed, Cui Li  
Goal 1: Add a price per night field in out listing descriptions.  
Goal 2: Improve on formatting of our HTML page.  
Goal 3: Finish the booking feature by implementing 3-way-binding, so that upon deletion of an entry from the databse, the HTML page will update the viewed listings.  
Goal 4: Implement sign up, sign in, and sign out.  
Goal 5: Research on how to unit test out code by mocking Firebase.  
Stretch Goal 1: Be able to unit test that our code delegates to Firebase.  
Stretch Goal 2: Create 3 separate HTML pages - homepage before login, sign up page, and homepage after login.  

Achieved: Goal 1-3, 5 and have created the logic and functions for Goal 4's sign up and sign in.  

### Friday
Team Members Present: Marcus, Marek, Ed, Cui Li  
Goal 1: Complete sign up, sign in, and sign out, and implement into MakersBnB.  
Goal 2: Create 3 separate HTML pages (yesterday's stretch goal)
Goal 3: Write Cypress tests for Goal 1.  
Goal 4: Allow click through to separate property pages for each listing, and book the page on that page.  
Stretch Goal: Add new feature to allow users to comment on a listing, and the listing shows up in individual property pages.  

