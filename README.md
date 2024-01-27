To run this code on your machine follow this steps:
1-have node downloaded
2-clone this repository
3-run 'npm i' in the terminal and then run 'ng s'
4-navigate to the local host provided
---------------------------------------------------------------------
1-custom directives where used in the homepage component for list item animation
/2-cache was used on the service file with a map that stores users that were fetched before to prevent redundant HTTP requests. if a user's id is a key of the map, no http call is made and the value stored in map is returned instead
/3-ngrx was used to handle the search functionality, when the search input state changes(onkeyup), an action from the header component is dispatched and the homepage is subscribed to the state observable and therefore whenever the state changes a function in the homepage is called to filter users according to the new search input
/4- you can check the reducers,selectors and actions and the state interface inside of the state folder