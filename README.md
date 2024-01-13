# Project: Local Places

Ravenous is a web app that interacts with the Yelp API. It allows users to look up restaurants located anywhere and provides options to sort the search results by best match, highest rated, and most reviewed.

## Technologies Used
- React Create App: Bootstrapped the project with Create React App.
- React: Used for building the web application.
- React Bootstrap: Used for styling various front-end elements.
- Express: Created a second server to serve as an authentication node between REST requests from the React App and the Yelp API, solving CORS authentication dependencies.
- Fetch & Cors: Used for HTTP requests, responses, and authentication.
- JavaScript: Core programming language.
- CSS: Used for additional styling, especially when React Bootstrap was insufficient.

## Challenges Faced

### 1. Creating Project & Components
- Focused on making a static site using React components, including business, business list, and search bar components.
- Used React Bootstrap for styling, facing the challenge of learning it for the first time.
  
### 2. Passing Information
- Refactored objects and started using props.
- Displayed an array of businesses in a grid layout using lodash's 'chunk' function and React Bootstrap Grid.

### 3. Setting Up Search Bar State
- Set up states, event handlers, and faked a search by printing to the console and giving alerts.
- Faced the challenge of a large search bar component, leading to the need to understand stateful and stateless items and split presentation and container components.

### 4. Interacting with Yelp API
- Read on Yelp API and added fetch calls to retrieve data in the search component.
- Used Express for an intermediary authentication server to solve Yelp CORS authentication issues.

## Conclusion
The project successfully overcame challenges at each stage, combining various technologies to create a functional web app that interacts seamlessly with the Yelp API.
