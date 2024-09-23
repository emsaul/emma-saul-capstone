# Listen to Miku

## Overview

This app is just a silly little thing that lets the user flip through a short and sweet hand-selected playlist of Hatsune Miku songs, as well as leave behind encouraging comments for the virtual idol!

### Problem Space

Essentially this app exists purely for fun! I do not really have any problems I wish to fix with it, and my only intention is to explore implementing some of the many new things that I have learned during my time with BrainStation. Other than that maybe it can introduce users to new songs or just to Hatsune Miku in general which is always a plus!

### User Profile

Hatsune Miku fans, and really anyone that likes cute things or finding new music!

### Features

- As a user, I want to see Miku fanart
- As a user, I want to freely click through a track list to discover new songs from a curated playlist
- As a user, I want to be able to leave kind messages on the comment board

## Implementation

### Tech Stack

- React
- Client libraries:
    - react
    - react-router
    - axios

### APIs

- Spotify embeded iframes

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

- Home page (Idle): The page a user will first see upon opening the app. 
- Home page (Active): The active version of the homepage that the user will see once they click on the start button.
- Comment page: A simple comment section.

### Mockups

#### Home Page (Idle)
![](./src/assets/mockups/idle-home-page.png)

#### Home Page (Active)
![](./src/assets/mockups/active-home-page.png)

#### Comment Page
![](./src/assets/mockups/compliment-page.png)

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date. 

- Create client
 - Make and organize files, place boilerplates and make routes

- Curate playlist
 - Find songs on Spotify, collect their IDs and add them to an array for use on the app

- Add functionality to app
 - Add some basic CRUD functions

- Styling
 - Add styling to the app with SCSS

---

## Future Implementations
- Polish styling for app 

- Ability to change themes of the website similar to a light/dark mode

- Open AI for comment moderation (sentiment analysis)

