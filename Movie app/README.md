# Movie app

## Current user stories: 
https://docs.google.com/spreadsheets/d/1SqU-IJU4T4qKvtPSp6EYOUUrWP_l_FjiiYU_wb2bsa8/edit#gid=0

## Preview:

#### UI/UX  *[Movie App - Miro Table](https://docs.google.com/spreadsheets/d/1SqU-IJU4T4qKvtPSp6EYOUUrWP_l_FjiiYU_wb2bsa8/edit#gid=0)*.

**Personas:**
- _Admin_
- _Moderator_
- _Logged-in user_
- _Guest user_


| Epic                  | As a ...            | I can ...                                                                        | So that I ...                                                                                       | Complexity |
| --------------------- | ------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------- |
| Movie                 | Logged-in User      | click the "add to favorites" checkbox                                            | add a movie to my favorite movies                                                                   | 7          |
| Movie                 | Guest User          | click the "add to favorites" checkbox                                            | get the message "You must register to add movies to favorites"                                      | 4          |
| Movie                 | Guest User          | click the movie card                                                             | am redirected to the Details Page of the movie                                                      | 2          |
| Movie                 | Guest User          | use sort button in navigation bar                                                | have displayed movies sorted by title                                                               | 3          |
| Movie                 | Guest User          | use serach input in header                                                       | have displayed movies with searched phrase                                                          | 3          |
| Movie                 | Guest User          | see movie card                                                                   | can read information about movie: title, genres and rating                                          | 3          |
| Movie                 | Guest User          | click "Load more" button on the bottom of the page                               | have displayed more movies                                                                          | 3          |
| Movie                 | Guest User          | see all components responsive                                                    | can use the application on any device                                                               | 2          |
| Comment               | Logged-in User      | click "Add review" button on Details Page                                        | can see the comment added to the comments section                                                   | 7          |
| Comment               | Guest User          | click "Add review" button on Details Page                                        | am redirected to the sign-in page                                                                   | 3          |
| Comment               | Admin and moderator | use the application database                                                     | can remove user comment from the page                                                               | 5          |
| Comment               | Guest User          | see comments section on Details Page                                             | can read author, title and description of all comments                                              | 3          |
| Movie matching engine | Guest User          | write a prompt in the search input dedicated to matching movies                  | get matched movies based on AI processing                                                           | 6          |
| Movie matching engine | Guest User          | provide answers to the list of true/false questions about movies                 | get matched movies based on these answers                                                           | 6          |
| Movie matching engine | Guest User          | see the loading status during each action                                        | am informed whenever page is fetching data                                                          | 3          |
| Category              | Guest User          | click category buttons in navigation bar                                         | can display movies from diffrent categories                                                         | 4          |
| Category              | Guest User          | enter the url of each category                                                   | am redirected to the proper page                                                                    | 5          |
| Category              | Logged-in User      | click "Favorites" button in navigation bar                                       | am redirected to page with my favorite movies                                                       | 8          |
| Details page          | Guest User          | see main info section as a first section below header                            | can read movie info including: title, tagline, genres, duration and release date and see the poster | 3          |
| Details page          | Guest User          | see actors section below main info section                                       | can display all actors playing in chosen movie with their real name and movie name                  | 3          |
| Details page          | Guest User          | see gallery section below actors section                                         | can see snapshots from the film as a gallery                                                        | 4          |
| Details page          | Guest User          | see recomendations section below gallery section                                 | can find a similar movies to the one i'm viewing currently                                          | 6          |
| Login page            | Guest User          | use third-party applications to sign-in                                          | don't need to register account on the page                                                          | 9          |
| Login page            | Guest User          | provide my credentials - email and password                                      | register my account in database                                                                     | 7          |
| Login page            | Logged-in User      | provide my credentials - email and password                                      | login to my own account                                                                             | 7          |
| Error Page            | Guest User          | see an error page when I try to access a page that doesn't exist or is forbidden | am informed about what error occured while browsing the page                                        | 4          |
| Error Page            | Guest User          | click logo in header or "Turn back" button                                       | am redirected to the Home Page                                                                      | 3          |
| Header                | Guest User          | see Movie App logo                                                               | click it and be redirected to the Home Page                                                         | 2          |
| Header                | Guest User          | write a phrase to the search input dedicated to search movies                    | use it to find movies by title                                                                      | 4          |
| Header                | Guest User          | click theme button                                                               | switch between dark and light mode                                                                  | 3          |
| Footer                | Guest User          | click social icons                                                               | can be redirected to the website owner's social media                                               | 1          |
| Footer                | Guest User          | see footer always on the bottom of each page                                     | can be sure this is the end of the page                                                             | 1          |
