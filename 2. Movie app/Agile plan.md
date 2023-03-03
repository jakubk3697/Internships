# **_Release 0.1.0_**

### **Initiative -** create a list of all required options in application

#### **Complexity** of user stories scale is **1-10** (higher score more difficult story)

## **Epics**

**1. Movie**

**Stories:**

Each movie contains “_Add to favorites” checkbox_, enabled only for logged-in users

When logged-in user click “_Add to favorites”_ checkbox, the movie is assigned to profile

When a guest user clicks the "_Add to favorites_" checkbox, he gets the message "_You must register to add movies to favorites_."

Guest user can click the movie card and be redirected to the _Details Page_ of  the movie

Guest user can sort displayed movies by title using sort button in navbar

Guest user can search movies by title

Guest user can see the card with: movie poster, title, genres and rating

Guest user can click _“Load more”_ button to fetch and display more movies

Guest user has customized layout for each type of screen

Guest user can view movies on devices with different screen sizes thanks to RWD

**2. Comment**

**Stories:**

Logged-in user can comment a movie which will be kept in database

Admin and moderator can edit or remove the each comment

Logged-in user can edit or remove own comment

Guest user can see title and description of each comment

**3.** **Category**

**Stories:**

Guest user can use navbar button to select displayed movie types (Popular, Now Playing, Top Rated, Upcoming)

Guest user can use navbar button to select displayed movie genres (Action, Comedy, Drama, Horror, Science Fiction, Thriller)

Each category contains its own route path

**4. Movie matching engine**

**Stories:**

Guest user can write a prompt in the search bar which will be processed by the latest OpenAI engine and then will get matched movies.

Guest user is informed when application is fetching data from the server with Loader component

**5. User profile**

**Stories:**

Guest user can create a profile with personal info and a profile photo

Guest user can view their favorite movies and comments

Guest user can edit their profile

**6. Details page**

**Stories:**

First main section contains: poster of the movie, title, tagline, description, genres, duration and release date

In second section all users can see actors with name, movie name and portrait

Third section is the gallery with snapshoots from the movie. You can scroll through pictures and maximize selected one

User can click back button with will be icon “ß”. After click user will be redirected to the main page.

Guest user can see recommended / similar movies after all movie details

## **Personas**

**1. Admin**

a) all permissions

**2. Moderator**

a) Edit or remove user content on the page

b) Delete user from database or block

**3. Logged-in user**

a) Comment or edit his comment

b) Sign-in

c) Edit or delete own content from the page

**4. Guest user**

a) View movies

b) Match movies with search 
