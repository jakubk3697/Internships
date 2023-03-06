# **_Release 0.1.0_**

### **Initiative -** create a list of all required options in application

#### **Complexity** of user stories scale is :one: - :keycap_ten: (higher score more difficult story)

## **Epics**

**1. Movie**

**Stories:**

Each movie contains “_Add to favorites” checkbox_, enabled only for logged-in users :four:

When logged-in user click “_Add to favorites”_ checkbox, the movie is assigned to profile :seven:

When any user clicks the "_Add to favorites_" checkbox, he gets the message "_You must register to add movies to favorites_." :three:

Any user can click the movie card and be redirected to the _Details Page_ of  the movie :two:

Any user can sort displayed movies by title using sort button in navbar :three:

Any user can search movies by title :three:

Any user can see the card with: movie poster, title, genres and rating :four:

Any user can click _“Load more”_ button to fetch and display more movies :three:

Any user has customized layout for each type of screen :four: 

**2. Comment**

**Stories:**

Logged-in user can comment a movie which will be kept in database :five:

Admin and moderator can edit or remove the each comment :six:

Logged-in user can edit or remove own comment :five:

Any user can see title and description of each comment :four:

**3. Category**

**Stories:**

Any user can use navbar button to select displayed movie types (Popular, Now Playing, Top Rated, Upcoming) :three:

Any user can use navbar button to select displayed movie genres (Action, Comedy, Drama, Horror, Science Fiction, Thriller) :four:

Each category contains its own route path :three:

Logged-in user can see his favorite movies in the “_Favorites_” category, not visible for guest users :seven:

**4. Movie matching engine**

**Stories:**

Any user can write a prompt in the search bar which will be processed by the latest OpenAI engine and then will get matched movies :seven:

Any user can see a list of static question and after answering them, he will get matched movies :four:

Any user is informed when application is fetching data from the server with _Loader_ component :three:

**5. User profile**

**Stories:**

Any user can create a profile with personal info and a profile photo :six:

Any user can view their favorite movies and comments :six:

Logged-in user can edit personal data in his profile stored in database :six:

**6. Details page**

**Stories:**

First main section contains: poster of the movie, title, tagline, description, genres, duration and release date :three:

In second section any user can see actors with name, movie name and portrait :three:

Third section is the gallery with snapshoots from the movie. You can scroll through pictures and maximize selected one :four:

Any user can click button to get back to the main page with proper route. :two:  

Any user can see recommended / similar movies after all movie details :three:

**7. Authentication**

**Stories:**

Any user can sign-in with Google account :eight:

Any registered user can sign-in with login and password :six:

**8. Error page**

**Stories:**

Any user can see error page when he tries to access a page that doesn’t exist :two:

Page contains error message and button to redirect to the main page :two:

**9. Header**

**Stories:**

Any user can see header with logo and sign-in button :two:

After clicking on logo, any user is redirected to the main page :two:

## **Personas**

**1. Admin**

a) All permissions

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
