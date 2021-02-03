# **Property Listing**

## **Installation:**

To run this project simply do the following:

* Download Git Hub Repository to your computer
* Unzip downloaded zip
* Open terminal of choice (*cmd, cmder, powershell*)
* Navigate to the unzipped folder in your terminal
* Run the following commands:
    * *npm install*
    * *npm run build*
    * *npm start*

Done, now enjoy!

## **Technology:**
* ### **TypeScript**
* ### **React**
    * Custom hooks ( *useState, useEffect* )
* ### **Material UI**
    * Material Snackbars, Card, createStyles, makeStyles, Typography, CircularProgress, CardMedia, CardActionArea, CardContent, CardActions, IconButton, Collapse, FavoriteIcon, ExpandMoreIcon, clsx
* ### **CSS ( *Animations* )**
    * Transition, interactivity, animation and **responsive design**.
    * Mobile menu burger and **sliding-in animation**, menu items appearing one at a time with a delay.
    * **Media queries** for **responsive design** on all devices.

## **Functionality:**
* Sliding Side Panel ( *Mobile Menu* ). Slick responsive design main header, menu-items disappear and only show in side panel.
* **Burger icon** to **open/close** mobile menu.
* Animation and transition of search bar, onto mobile menu.
* Filtering of search results with *title*, *price per month range*, and *square meter size range*. 
* Filter and choose range of results by **moving the slider**.
* Appropriate red **warning message** displayed when no results found, or otherwise a appropriate green **success message** if results are successfully found.
* React component to render the result.
* Use **Effect Hook** to get **API** data on-load, only on the first time that the page loads.
* Information stored away, for a cleaner look, using **expandable cards** to show/hide information.
* The appropriate range of results will be displayed according to the filters ( *by default shows everything* ).

## **Future Improvements:**
* **Optional filtering** features, all filters hidden until user chooses to enable, using the **checkbox**.
* Allow users to choose **favourites** and add to the properties to their **wish-list**. Then display results accordingly, for their favourites.
* **Simulate a favourite** being stored against a *user profile*.
